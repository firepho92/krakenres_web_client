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
  }
  render() {
    return (
      <app>
        <Header cajero = {this.state.cajero}/>
        {cajero != null ? <Main/> : <Login/>}
      </app>
    );
  }
}

export default App;
