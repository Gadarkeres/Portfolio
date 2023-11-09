import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuContextProvider } from './context/MenuContext';
import {ButtonContextProvider} from './context/ButtonContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ButtonContextProvider>
  <MenuContextProvider>
 
    <React.StrictMode>

    <App />

  </React.StrictMode>

  </MenuContextProvider>
  </ButtonContextProvider>

);

