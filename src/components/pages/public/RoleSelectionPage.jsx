// src/pages/public/RoleSelectionPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Title } from '@mantine/core';
import { useAuth } from '../../contexts/AuthContext';

function RoleSelectionPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    if (!user) return;
    const updatedUser = { ...user, role };
    login(updatedUser);
    navigate(`/${role}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: '4rem auto', padding: '1rem' }}>
      <Title order={2} mb="md">Select Your Role</Title>
      <Stack spacing="md">
        <Button onClick={() => handleRoleSelect('admin')}>Admin</Button>
        <Button onClick={() => handleRoleSelect('school')}>School</Button>
        <Button onClick={() => handleRoleSelect('parent')}>Parent</Button>
        <Button onClick={() => handleRoleSelect('student')}>Student</Button>
      </Stack>
    </div>
  );
}

export default RoleSelectionPage;
