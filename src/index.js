import React from 'react';
import ReactDOM from 'react-dom';

import dotenv from 'dotenv';

// redux
import { Provider } from 'react-redux';

// Toastr
import 'react-toastify/dist/ReactToastify.min.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import App from './App';
import store from './store';

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
