import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
