import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './blog/post'
import Posts from './blog/posts'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
    <Post />
    <Posts />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
