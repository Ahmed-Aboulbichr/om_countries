import React from 'react';
import createRoot from 'react-dom/client';
import App from './App';
import "./Styles/index.scss";


const root = createRoot.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>






);


