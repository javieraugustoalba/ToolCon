import React from 'react';
import './RequestToolStoreKeeper.css';



export default function RequestToolStoreKeeper() {
  return (
    <div className='rental-infos color-rtsk'>
      <div className='rental-info-1'>
        <span className='tool-requests'>Solicitudes de Herramienta</span>
        <span className='new-requests-made'>
          Nuevas Solicitudes Realizadas
        </span>
      </div>
      <div className='flex-row-ec'>
        <div className='pick-up'>
        <form>
          <label className='assign'>
            <input type="radio" name="acciones" value="Asignar" className='mark'/> Asignar
          </label>
          <label className='return'>
            <input type="radio" name="acciones" value="Devolver" className='mark'/> Devolver
          </label>
        </form>
        </div>
      </div>
      <div className='flex-row-ff'>
        <div className='locations'>
          <label htmlFor="tipos" className='tool'>Herramienta</label>
          <select id="tipos" name="tipos" className='select-city'>
            <option value="herramienta" className='select'>Seleccionar</option>
            <option value="herramienta">...</option>
          </select>
        </div>
        <div>
          <label htmlFor="tipos" className='operator'>Operario</label>
          <select id="tipos" name="tipos" className='select-city'>
            <option value="operario" className='select'>Seleccionar</option>
            <option value="operario">...</option>
          </select>
        </div>
      </div>
      <div className='flex-row-ff'>
        <div className='locations'>
          <label className='estado'>Estado</label>
          <span className='mostrar-estado'>Text...</span>
        </div>
        <div className='locations'>
          <label className='codigo-de-la-herramienta'>Código de la Herramienta</label>
          <div className='marco-ingresar-herramienta'>
            <input className='ingresar-codigo' placeholder='Ingresar codigo' />
          </div>
        </div>
        <div>
            <button className='bottonloco'>
              <span>Asignar Herramienta</span>
            </button>
          </div>
      </div>
      
      {/*<div className='drop-off' />
      <span className='fecha-de-asignacion-entrega'>
        Fecha de Asignación/Entrega
      </span>*/}
      
      
    </div>
  );
};
