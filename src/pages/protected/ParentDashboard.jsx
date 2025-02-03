// src/pages/protected/ParentDashboard.jsx
import React from 'react';
import { Title, TextInput } from '@mantine/core';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import DataTable from '../../components/common/DataTable';
import { fetchChildAchievements } from '../../services/api';

function ParentDashboard() {
  const [searchText, setSearchText] = useState('');
  const { data, isLoading } = useQuery({ 
    queryKey: ['childAchievements', 'Bob'],
    queryFn: () => fetchChildAchievements('Bob')
  });
  
  if (isLoading) return <LoadingSpinner />;

  const filtered = data.filter((ach) =>
    ach.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Title order={2} mb="xl">Parent Dashboard</Title>
      <TextInput
        placeholder="Search achievements..."
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
        mb="md"
      />
      <DataTable columns={['Achievements']} data={filtered.map((item) => ({ achievements: item }))} />
    </div>
  );
}

export default ParentDashboard;
