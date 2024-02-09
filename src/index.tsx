import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './GlobalStyle.css';
import { ContextDataProvider } from './context/ContextData';
import { OutputContextProvider } from './context/ContextOutputData';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ContextDataProvider>
      <OutputContextProvider>
        <App />
      </OutputContextProvider>
    </ContextDataProvider>
  </React.StrictMode>
);


