import React, { Component } from 'react'
import Header from '../header/Header'
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
      </app>
    );
  }
}

export default App;
