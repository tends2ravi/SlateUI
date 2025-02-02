// src/pages/protected/StudentDashboard.jsx
import React from 'react';
import { Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import DataTable from '../../components/common/DataTable';
import { fetchStudentAchievements } from '../../services/api';

function StudentDashboard() {
  // Hard-coded to 'Alice' for demo
  const { data, isLoading } = useQuery(['studentAchievements', 'Alice'], () =>
    fetchStudentAchievements('Alice')
  );

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Title order={2} mb="xl">Student Dashboard</Title>
      <DataTable
        columns={['Achievements']}
        data={data.map((ach) => ({ achievements: ach }))}
      />
    </div>
  );
}

export default StudentDashboard;
