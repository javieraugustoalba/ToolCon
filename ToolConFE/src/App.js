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
import ModificarT from './components/ToolManagement/ModificarT';
import ModificarO from './components/WorkersManagement/ModificarO.js';
import M_M_O from './components/Message/M_M_O.js'
import M_M_T from './components/Message/M_M_T.js'
import M_A_T from './components/Message/M_A_T.js'
import M_S from './components/Message/M_S.js'


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
        <Route path='/m_m_o' element={<M_M_O/>}/>
        <Route path='/m_m_t' element={<M_M_T/>}/>
        <Route path='/m_a_t' element={<M_A_T/>}/>
        <Route path='/m_s' element={<M_S/>}/>
        <Route path='/modificar-tool' element={<ModificarT/>}/>
        <Route path='/modificar-operario' element={<ModificarO/>}/>
      </Routes>
    </Router>
  );
}

export default App;
