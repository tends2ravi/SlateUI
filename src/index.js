// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// React Query for caching data
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import App from './App';
import './assets/styles/global.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
