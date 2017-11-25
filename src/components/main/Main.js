import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../home/Home'
import Kitchen from '../kitchen/Kitchen'
import Tables from '../tables/Tables'
import './Main.css'

class Main extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path = '/' component = {Home}></Route>
          <Route exact path = '/cocina' component = {Kitchen}></Route>
          <Route exact path = '/mesas' render={()=><Tables meseros = {this.props.meseros} zonas = {this.props.zonas}/>}></Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
