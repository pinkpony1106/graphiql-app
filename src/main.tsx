import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import ErrorInfo from './Components/ErrorBoundary/ErrorInfo';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary fallback={<ErrorInfo />}>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
