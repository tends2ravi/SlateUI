// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { MantineProvider } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';

// Layout & Protected Routes
import ProtectedRoute from './components/layout/ProtectedRoute';
import AppLayout from './components/layout/AppLayout';

// Public Pages
import LoginPage from './pages/public/LoginPage';
import RoleSelectionPage from './pages/public/RoleSelectionPage';

// Protected Pages
import AdminDashboard from './pages/protected/AdminDashboard';
import SchoolDashboard from './pages/protected/SchoolDashboard';
import ParentDashboard from './pages/protected/ParentDashboard';
import StudentDashboard from './pages/protected/StudentDashboard';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/role-selection',
    element: <RoleSelectionPage />
  },
  // Protected Routes
  {
    element: <ProtectedRoute allowedRoles={['admin', 'school', 'parent', 'student']} />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: '/admin', element: <AdminDashboard /> },
          { path: '/school', element: <SchoolDashboard /> },
          { path: '/parent', element: <ParentDashboard /> },
          { path: '/student', element: <StudentDashboard /> }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />
  }
]);

export default function App() {
  // Dark/Light theme toggle
//   const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
//   const toggleColorScheme = (value) => {
//     setColorScheme(value || (colorScheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <AuthProvider>
//       <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
//         <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
//           <RouterProvider router={router} />
//         </MantineProvider>
//       </ColorSchemeProvider>
//     </AuthProvider>
//   );
// }

  
const { colorScheme } = useMantineColorScheme();

return (
  <AuthProvider>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  </AuthProvider>
);
}