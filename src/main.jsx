import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import AuthUserContextProvider from './context/AuthUser';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthUserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthUserContextProvider>
  </React.StrictMode>
);
