import React from 'react';
import '../../components/Styles.css';

export default function RequestToolStoreKeeper() {
  return (
    <div className='rental-info'>
      <div className='rental-info-1'>
        <span className='tool-requests'>Solicitudes de Herramienta</span>
        <span className='new-requests-made'>
          Nuevas Solicitudes Realizadas
        </span>
      </div>
      <div className='flex-row-ec'>
        <div className='pick-up'>
          <div className='mark'>
            <div className='mark-2' />
          </div>
          <span className='assign'>Asignar</span>
        </div>
        <span className='return'>Devolver</span>
        <div className='mark-3'>
          <div className='mark-4' />
        </div>
      </div>
      <div className='flex-row-ff'>
        <div className='locations'>
          <span className='tool'>Herramienta</span>
          <div className='select-city'>
            <div className='bg' />
            <span className='select'>Seleccionar</span>
            <div className='vuesax-outline-arrow-down'>
              <div className='vuesax-outline-arrow-down-5' />
            </div>
          </div>
        </div>
        <div className='date'>
          <span className='operator'>Operario</span>
          <div className='select-date'>
            <div className='bg-6' />
            <span className='select-7'>Seleccionar</span>
            <div className='vuesax-outline-arrow-down-8'>
              <div className='arrow-down' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex-row-bac'>
        <div className='time'>
          <span className='estado'>Estado</span>
          <div className='select-your-time'>
            <span className='seleccionar'>Seleccionar</span>
            <div className='bg-9' />
          </div>
        </div>
        <div className='time-a'>
          <span className='codigo-de-la-herramienta'>
            Código de la Herramienta
          </span>
          <div className='select-your-time-b'>
            <span className='no-seleccionado'>No seleccionado</span>
            <div className='bg-c' />
          </div>
        </div>
      </div>
      <div className='drop-off' />
      <span className='fecha-de-asignacion-entrega'>
        Fecha de Asignación/Entrega
      </span>
      <div className='flex-row-c'>
        <div className='bg-d' />
        <button className='button-rent'>
          <span className='asignar-herramienta'>Asignar Herramienta</span>
        </button>
      </div>
    </div>
  );
}
