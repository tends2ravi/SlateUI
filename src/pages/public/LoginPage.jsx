// src/pages/public/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, PasswordInput, Button, Title, Alert } from '@mantine/core';
import { useAuth } from '../../contexts/AuthContext';
import { loginUser } from '../../services/auth';

function LoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser(credentials);
      login(userData);
      navigate('/role-selection');
    } catch (err) {
      setError('Invalid credentials. Please check username and password.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '4rem auto', padding: '1rem' }}>
      <Title order={2} mb="xl">Slate Dashboard Login</Title>
      {error && <Alert color="red" mb="md">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Username"
          required
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <PasswordInput
          label="Password"
          required
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          mt="md"
        />
        <Button type="submit" fullWidth mt="xl">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
