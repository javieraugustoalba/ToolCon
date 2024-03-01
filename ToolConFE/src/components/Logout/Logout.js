import React from 'react';
import './Logout.css'

const LogoutComponent = ({ onLogout }) => {
  return (
    <div className='logout-container'>
        <p></p>
      <button onClick={onLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default LogoutComponent;