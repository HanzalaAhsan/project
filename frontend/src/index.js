import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') // Removed the TypeScript type assertion
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

