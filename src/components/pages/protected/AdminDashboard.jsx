// src/pages/protected/AdminDashboard.jsx
import React from 'react';
import { Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import DataTable from '../../components/common/DataTable';
import { fetchSchools, fetchStudents } from '../../services/api';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

function AdminDashboard() {
  // Load data with React Query
  const { data: schools, isLoading: loadingSchools } = useQuery(['schools'], fetchSchools);
  const { data: students, isLoading: loadingStudents } = useQuery(['students'], fetchStudents);

  if (loadingSchools || loadingStudents) return <LoadingSpinner />;

  // Prepare chart data
  const chartData = schools.map((s) => ({
    name: s.name,
    students: s.students
  }));

  return (
    <div>
      <Title order={2} mb="xl">Admin Dashboard</Title>

      <Title order={3} mt="md">Schools Overview</Title>
      <DataTable columns={['Name', 'Students', 'Location']} data={schools} />

      <Title order={3} mt="xl" mb="sm">Student Count Chart</Title>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="students" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <Title order={3} mt="xl" mb="sm">All Students</Title>
      <DataTable columns={['Name', 'Achievements']} data={students} />
    </div>
  );
}

export default AdminDashboard;
