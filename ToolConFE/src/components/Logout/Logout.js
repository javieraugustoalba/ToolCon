import React from 'react';
import './Logout.css'
import { NavLink } from 'react-router-dom';

const LogoutComponent = ({ onLogout }) => {
  return (
    <>
    <NavLink to={'/'}>
    <div className='logout-container'>
        <p>Cierra tu sesión</p>
      <button onClick={onLogout}>Cerrar Sesión</button>
    </div>
    </NavLink>
    </>
  );
};

export default LogoutComponent;