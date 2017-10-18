import React, { Component } from 'react'
import './App.css'
import {Button} from 'reactstrap'

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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>hola</Button>
      </div>
    );
  }
}

export default App;
