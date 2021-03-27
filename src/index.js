import React from 'react';
import ReactDOM from 'react-dom';

import dotenv from 'dotenv';

// Toastr
import 'react-toastify/dist/ReactToastify.min.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import App from './App';

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
