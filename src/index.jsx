/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/utilis.scss';

// eslint-disable-next-line import/order
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
