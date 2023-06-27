import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorlApp from './HelloWorlApp'
import './style.css'
import CounterApp from './CounterApp';
import { FirstApp } from './FirstApp';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <FirstApp title="Hola, soy vegueta" />
  </React.StrictMode>

)