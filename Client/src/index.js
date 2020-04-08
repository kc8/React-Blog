import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import "./static/css/main.css"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('wrapper')
);

serviceWorker.unregister();
