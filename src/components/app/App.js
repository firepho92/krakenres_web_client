import React, { Component } from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import Login from '../login/Login'
import {isLogged, logout} from '../../API/usuarios'
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      comandas: null,
      mesas: null,
      meseros: null,
      cajero: null
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount(){
    const user = new Promise((resolve, reject) => {
      resolve(isLogged())
    })
    .then(res => {
      if(!res){
        console.log(res)
      }else{
        sessionStorage.setItem('cajero_id', res.Id)
        sessionStorage.setItem('cajero_nombre', res.nombre)
        this.setState({
          cajero: res
        })
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleLogout() {
    logout(this.state.cajero)
    sessionStorage.removeItem('cajero_Id')
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

  render() {
    return (
      <div>
        <Header cajero = {this.state.cajero} handleLogout = {this.handleLogout}/>
        {(this.state.cajero != null && sessionStorage.getItem('cajero_id') != null) ? <Main/> : <Login handleLogin = {this.handleLogin}/>}
      </div>
    );
  }
}

export default App;
