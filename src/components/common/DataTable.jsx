// src/components/common/DataTable.jsx
import React from 'react';
import { Table } from '@mantine/core';

function DataTableComponent({ columns, data }) {
  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={col}>{item[col.toLowerCase()]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

// Memoize the table to avoid unnecessary re-renders
const DataTable = React.memo(DataTableComponent);

export default DataTable;
