import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../home/Home'

class Main extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path = '/' component = {Home}></Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
