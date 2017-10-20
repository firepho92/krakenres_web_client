import React, { Component } from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import Login from '../login/Login'
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
  }

  handleLogin(user){
    this.setState({
      cajero: user[0]
    })
  }

  render() {
    return (
      <div>
        <Header cajero = {this.state.cajero}/>
        {this.state.cajero != null ? <Main/> : <Login handleLogin = {this.handleLogin}/>}
      </div>
    );
  }
}

export default App;
