import React, { Component } from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import Login from '../login/Login'
import LoadingApp from '../loadingApp/LoadingApp'
import {isLogged, logout} from '../../API/usuarios'
import {getWaiters} from '../../API/horarios'
import {getZones} from '../../API/zonas'
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      ready: false,
      zonas: null,
      mesas: null,
      comandas: null,
      meseros: null,
      cajero: null
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.showState = this.showState.bind(this)
  }

  componentDidMount(){
    const day = new Date().getDay();
    var user = new Promise((resolve, reject) => {
      resolve(isLogged())
    })
    var meseros = new Promise((resolve, reject) => {
      resolve(getWaiters(day))
    })
    var zonas = new Promise((resolve, reject) => {
      resolve(getZones())
    })
    var wait = new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    })
    Promise.all([user, meseros, zonas, wait]).then(values => {
      if(!values[0]){
        sessionStorage.removeItem('cajero_id')
        sessionStorage.removeItem('cajero_nombre')
        this.setState({
          cajero: null,
          ready: true
        })
      }else{
        sessionStorage.setItem('cajero_id', values[0].usuarios_id)
        sessionStorage.setItem('cajero_nombre', values[0].nombres)
        this.setState({
          cajero: values[0],
          meseros: values[1],
          zonas: values[2],
          ready: true
        })
      }
    })
  }

  handleLogout() {
    logout(this.state.cajero)
    sessionStorage.removeItem('cajero_id')
    sessionStorage.removeItem('cajero_nombre')
    this.setState({
      cajero: null
    })
  }

  handleLogin(user) {
    if(user.Id){
      sessionStorage.setItem('cajero_id', user.Id)
      sessionStorage.setItem('cajero_nombre', user.nombre)
      this.setState({
        cajero: user
      })
    }
  }

  showState() {
    console.log(this.state);
  }

  render() {
    if(!this.state.ready){
      return (
        <LoadingApp showState = {this.showState}/>
      );
    }else{
      return (
        <div>
          <Header cajero = {this.state.cajero} handleLogout = {this.handleLogout}/>
          {(this.state.cajero != null && sessionStorage.getItem('cajero_id') != null) ? <Main meseros = {this.state.meseros} zonas = {this.state.zonas}/> : <Login handleLogin = {this.handleLogin}/>}
        </div>
      );
    }
  }
}

export default App;
