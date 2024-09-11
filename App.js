// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import LoanApplication from './components/LoanApplication';
import LoanReports from './components/LoanReports';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} // Redirect to login if not logged in
        />
        <Route
          path="/loan-application"
          element={isLoggedIn ? <LoanApplication /> : <Navigate to="/" />}
        />
        <Route
          path="/loan-reports"
          element={isLoggedIn ? <LoanReports /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
