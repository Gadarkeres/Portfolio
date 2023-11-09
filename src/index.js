import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuContextProvider } from './context/MenuContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MenuContextProvider>
    <React.StrictMode>
  
    <App />
   
  </React.StrictMode>
  </MenuContextProvider>
);

