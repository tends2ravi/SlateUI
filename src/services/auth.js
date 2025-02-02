// src/services/auth.js
// Simple simulated login using local checks
export const loginUser = async ({ username, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Dummy credentials
        if (username === 'admin' && password === 'admin123') {
          resolve({ username, role: 'admin' });
        } else if (username === 'school' && password === 'school123') {
          resolve({ username, role: 'school' });
        } else if (username === 'parent' && password === 'parent123') {
          resolve({ username, role: 'parent' });
        } else if (username === 'student' && password === 'student123') {
          resolve({ username, role: 'student' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 700);
    });
  };
  