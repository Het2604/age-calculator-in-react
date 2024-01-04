import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AgeCalculatorForm from './Components/AgeCalculatorForm';
import AgeResult from './Components/AgeResult';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);