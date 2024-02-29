import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/Styles.css';
import './LeftNav.css'

export default function LeftNav() {
  return (
    <div className='box'>

      <div className='section'>
        <span className='text'>M A I N  M E N U</span>
      </div>
      <div>
        <NavLink to="/dashboard">
        <div className='section-1'>
              <div className='img' />
            <span className='text-2'>Dashboard</span>
        </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="/tool-management">
        <div className='section-1'>
          <div className='img-2' />
            <span className='text-2'>Gestión de Herramienta</span>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="/workers-management">
          <div className='section-1'>
            <div className='img-3' />
            <span className='text-2'>Gestión de Operarios</span>
          </div>
        </NavLink>
      </div>
      <div>
      <NavLink to="/reports">
        <div className='section-1'>
            <div className='img-4' />
            <span className='text-2'>Reportes</span>
          </div>
        </NavLink>
      </div>
      <div className='margen-nav'>
        <div className='box-6'>
          <div className='img-5' />
          <a className='center-help'>Centro de ayuda</a>
        </div>
        <div className='box-6'>
            <div className='img-6' />
          <a className='configuration'>Configuracion</a>
        </div>
      </div>

    </div>
  );
}
