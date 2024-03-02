import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/LoginPage'; // Adjust the import path as necessary
import Dashboard from './components/Dashboard/Dashboard'; // Adjust the import path as necessary
import WorkersManagement from './components/WorkersManagement/WorkersManagement';
import CreateOperator from './components/WorkersManagement/CreateOperator.js';
import ToolManagement from './components/ToolManagement/ToolManagement';
import Reports from './components/Reports/Reports';
import CreateTool from './components/ToolManagement/CreateTool';
import LeftNav from './components/LeftNav/LeftNav';
import M_O_C from './components/Message/M_C_O.js';
import M_O_T from './components/Message/M_C_T.js';

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
        <Route path="/create-operator" element={<CreateOperator></CreateOperator>} />
        <Route path='/m_c_o' element={<M_O_C/>}/>
        <Route path='/m_c_t' element={<M_O_T/>}/>
      </Routes>
    </Router>
  );
}

export default App;
