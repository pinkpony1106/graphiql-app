import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import ErrorInfo from './Components/ErrorBoundary/ErrorInfo';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<ErrorInfo />}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
