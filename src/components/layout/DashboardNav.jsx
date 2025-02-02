// src/components/layout/DashboardNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Stack } from '@mantine/core';

function DashboardNav() {
  const { user, logout } = useAuth();

  return (
    <Stack spacing="xs">
      {user?.role === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
      {user?.role === 'school' && <Link to="/school">School Dashboard</Link>}
      {user?.role === 'parent' && <Link to="/parent">Parent Dashboard</Link>}
      {user?.role === 'student' && <Link to="/student">Student Dashboard</Link>}

      <Button color="red" onClick={logout}>Logout</Button>
    </Stack>
  );
}

export default DashboardNav;
