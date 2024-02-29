import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/LoginPage'; // Adjust the import path as necessary
import Dashboard from './components/Dashboard/Dashboard'; // Adjust the import path as necessary
import WorkersManagement from './components/WorkersManagement/WorkersManagement';
import ToolManagement from './components/ToolManagement/ToolManagement';
import Reports from './components/Reports/Reports';
import CreateTool from './components/ToolManagement/CreateTool';
import LeftNav from './components/LeftNav/LeftNav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tool-management" element={<ToolManagement />} />
        <Route path="/leftnav" element={<LeftNav />} />
        <Route path="/workers-management" element={<WorkersManagement />} />
        <Route path="/create-tool" element={<CreateTool />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
