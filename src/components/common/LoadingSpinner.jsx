// src/components/common/LoadingSpinner.jsx
import React from 'react';
import { Loader } from '@mantine/core';

function LoadingSpinner() {
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <Loader size="xl" variant="bars" />
    </div>
  );
}

export default LoadingSpinner;
