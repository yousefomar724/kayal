import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ItemProvider} from './context/ItemContext'
import App from './App';


ReactDOM.render(
  <div>
    <React.StrictMode>
      <ItemProvider>
        <App />
      </ItemProvider>
    </React.StrictMode>
  </div>,
  document.getElementById('root')
);
