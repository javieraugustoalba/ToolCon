import React from 'react';
import './create-tool.css';

export default function CreateTool() {
  return (
    <div className='main-container-gestion-herramientas'>
      <span className='gestion-de-herramientas'></span>

        <div className='billing-info'>
          <div className='billing-info-1'>
            <span className='crear-herramienta'>Crear Herramienta</span>
            <span className='ingrese-los-datos'>
              Ingrese los Datos de la Nueva Herramienta
            </span>
          </div>
          <div className='flex-row-cdc'>
            <div className='name'>
              <span className='nombre-de-la-herramienta'>
                Nombre de la Herramienta
              </span>
              <div className='your-name'>
                <span className='ej-martillo'>Ej: Martillo</span>
                <div className='bg' />
              </div>
            </div>
            <div className='phone-number'>
              <span className='fecha-de-compra'>Fecha de Compra</span>
              <div className='select-your-date'>
                <div className='bg-2' />
                <span className='seleccionar'>Seleccionar</span>
                <div className='vuesax-outline-arrow-down'>
                  <div className='vuesax-outline-arrow-down-3' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex-row-cac'>
            <div className='town-or-city'>
              <span className='tiempo-de-uso'>Tiempo de Uso </span>
              <div className='town-or-city-4'>
                <span className='ej-2-anos'>EJ:2 años</span>
                <div className='bg-5' />
              </div>
            </div>
            <div className='box-4'>
              <div className='address'>
                <span className='costo'>Costo</span>
                <div className='address-6'>
                  <span className='ej-50000'>EJ:50000</span>
                  <div className='bg-7' />
                </div>
              </div>
              <div className='address-8'>
                <span className='marca'>Marca</span>
                <div className='address-9'>
                  <span className='ej-50000-a'>EJ:50000</span>
                  <div className='bg-b' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='review'>
          <div className='address-c'>
            <span className='estado-herramienta'>Estado de la Herramienta</span>
            <div className='address-d'>
              <span className='ej-en-uso'>EJ: En uso</span>
              <div className='bg-e' />
            </div>
          </div>
          <span className='foto'>Foto </span>
          <div className='bg-f'>
            <span className='seleccionar-archivo'>Seleccionar Archivo</span>
            <div className='folder-cross' />
          </div>
        </div>

      <button className='button-rent'>
        <span className='agregar'>Agregar</span>
      </button>
    </div>
  );
}
