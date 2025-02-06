# Slate Dashboard

Slate Dashboard is a responsive, role-based dashboard application built with React.js. The app demonstrates a modern UI/UX with secure routing, dark mode, and data visualization using Recharts. It supports multiple user roles (Admin, School, Parent, and Student) and employs mock data to simulate API calls.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

Slate Dashboard provides:

- Secure authentication using the React Context API.
- Role-based routing for different user dashboards.
- A responsive design built with Mantine and dark/light theme toggling.
- Data visualization with Recharts.
- Mock data services for development and testing.

## Features

- **Authentication & Authorization:** Secure login with role selection.
- **Role-Based Dashboards:** Separate views for Admin, School, Parent, and Student roles.
- **Dark Mode Toggle:** Easily switch between light and dark themes.
- **Data Visualization:** Dynamic charts (e.g., bar chart in Admin Dashboard) powered by Recharts.
- **Mock Data Integration:** Simulated API services using Promises for development without a live backend.
- **Responsive UI:** Mobile-first and intuitive interface built with Mantine.

## Tech Stack

- **Frontend Framework:** React.js
- **Routing:** React Router DOM
- **UI Components & Styling:** Mantine (Core & Hooks) and Emotion
- **Data Fetching & Caching:** React Query (`@tanstack/react-query`)
- **Data Visualization:** Recharts
- **HTTP Client:** Axios (for potential API integration)
- **Icons:** `@tabler/icons-react`

## Installation

1. Clone the repository:

```bash
git clone https://github.com/tends2ravi/SlateUI.git
cd slate-dashboard
```

2. Install dependencies:

```bash
npm install
```

This will install:

- @mantine/core
- @mantine/hooks
- @tanstack/react-query
- @tabler/icons-react
- axios
- recharts
- react-router-dom
- react, react-dom, react-scripts (and other standard React packages)

## Usage

1. Start the development server:

```bash
npm start
```

2. Open your browser and visit: http://localhost:3000

3. Test Credentials:

- Admin: username: admin, password: admin123
- School: username: school, password: school123
- Parent: username: parent, password: parent123
- Student: username: student, password: student123
- After login, select your role. The chosen role will navigate you to the corresponding dashboard.

## Project Structure
```
slate-dashboard/
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── global.css
│   ├── components/
│   │   ├── common/
│   │   │   ├── DataTable.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   └── layout/
│   │       ├── AppLayout.jsx
│   │       ├── DashboardNav.jsx
│   │       └── ProtectedRoute.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── public/
│   │   │   ├── LoginPage.jsx
│   │   │   └── RoleSelectionPage.jsx
│   │   └── protected/
│   │       ├── AdminDashboard.jsx
│   │       ├── SchoolDashboard.jsx
│   │       ├── ParentDashboard.jsx
│   │       └── StudentDashboard.jsx
│   ├── services/
│   │   ├── auth.js
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

- assets/styles: Global CSS styles.
- components/common: Reusable components like DataTable and LoadingSpinner.
- components/layout: Layout components including AppLayout, DashboardNav, and ProtectedRoute.
- contexts: Global authentication context.
- pages/public: Public pages (Login and Role Selection).
- pages/protected: Role-specific dashboard pages.
- services: Mock API and authentication services.
- App.jsx & main.jsx: Main application entry points.

## Contributing

Pull requests are welcome! Please follow these steps:

- 1. Fork the repository.
- 2. Create a new branch.
- 3. Make your changes.
- 4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details
