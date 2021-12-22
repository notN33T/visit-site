import React            from 'react';
import ReactDOM         from 'react-dom';
import App              from './App';
import reportWebVitals  from './CRA/reportWebVitals';
import store            from './store/firstStore/store';
import {Provider}       from 'react-redux';
import './CRA/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
