// src/services/api.js
import axios from 'axios';

// Mock data
const mockSchools = [
  { name: 'Green Valley High', students: 1500, location: 'California' },
  { name: 'Sunrise Elementary', students: 800, location: 'Texas' }
];

const mockStudents = [
  { name: 'Alice', achievements: ['Math Olympiad', 'Art Contest'] },
  { name: 'Bob', achievements: ['Essay Competition', 'Robotics Project'] }
];

// Example Axios client (not actively used with real backend here)
export const apiClient = axios.create({
  baseURL: 'https://example.com/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// ADMIN fetches
export const fetchSchools = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSchools);
    }, 500);
  });
};

export const fetchStudents = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        mockStudents.map((s) => ({
          name: s.name,
          achievements: s.achievements.join(', ')
        }))
      );
    }, 500);
  });
};

// SCHOOL fetches
export const fetchStudentsBySchool = async (schoolName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // For demo, ignoring the schoolName filter
      resolve(
        mockStudents.map((s) => ({
          name: s.name,
          achievements: s.achievements.join(', ')
        }))
      );
    }, 500);
  });
};

// PARENT fetches
export const fetchChildAchievements = async (childName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const child = mockStudents.find((s) => s.name === childName);
      resolve(child ? child.achievements : []);
    }, 500);
  });
};

// STUDENT fetches
export const fetchStudentAchievements = async (studentName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const student = mockStudents.find((s) => s.name === studentName);
      resolve(student ? student.achievements : []);
    }, 500);
  });
};
