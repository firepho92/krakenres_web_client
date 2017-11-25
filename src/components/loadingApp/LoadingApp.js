import React, { Component } from 'react'
import './LoadingApp.css'

class LoadingApp extends Component {

  render() {
    return (
        <div className="loader row align-items-center" onClick={this.props.showState}>
            <div className="col col-sm-12">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
            <div className="col">Cargando</div>
        </div>
    );
  }
}

export default LoadingApp;
