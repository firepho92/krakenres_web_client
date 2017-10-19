import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
