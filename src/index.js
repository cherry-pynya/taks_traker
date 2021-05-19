import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/app';
import getData from './js/getStorageData'
import './css/style.css'

ReactDOM.render(
  <React.StrictMode>
    <App data={getData()} />
  </React.StrictMode>,
  document.getElementById('root')
);
