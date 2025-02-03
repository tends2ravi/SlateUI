// src/pages/protected/SchoolDashboard.jsx
import React from 'react';
import { Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import DataTable from '../../components/common/DataTable';
import { fetchStudentsBySchool } from '../../services/api';

function SchoolDashboard() {
  const { data: students, isLoading } = useQuery({
    queryKey: ['schoolStudents', 'Green Valley High'], // Added school name to key
    queryFn: () => fetchStudentsBySchool('Green Valley High')
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Title order={2} mb="xl">School Dashboard</Title>
      <DataTable columns={['Name', 'Achievements']} data={students} />
    </div>
  );
}

export default SchoolDashboard;
