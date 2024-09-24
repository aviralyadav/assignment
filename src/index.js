// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElm = document.getElementById('root')
const root = createRoot(rootElm)

function AppContainer(){
  return (
  <React.StrictMode>
    <App />
  </React.StrictMode>
  )
}

root.render(<AppContainer/>);
