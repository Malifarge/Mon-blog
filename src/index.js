import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
  </React.StrictMode>
);

reportWebVitals();