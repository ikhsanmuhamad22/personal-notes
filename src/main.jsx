import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import AuthUserContextProvider from './context/AuthUserContext';
import LanguageProvider from './context/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <AuthUserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthUserContextProvider>
    </LanguageProvider>
  </React.StrictMode>
);
