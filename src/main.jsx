// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// React Query for caching data
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { AuthProvider } from './contexts/AuthContext';
import App from './App';
import './assets/styles/global.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
// In main.jsx UPDATE:
root.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
