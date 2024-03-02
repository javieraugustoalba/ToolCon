import React from 'react';
import './create-tool.css';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import Gtool from './Gtool'
import { NavLink } from 'react-router-dom';

export default function CreateTool() {
  return (
    <>
      <div>
        <Header></Header>
        <div className='main-container'>
          <LeftNav></LeftNav>
          <div className='flex-column-a'>
            <div className='main-container-gestion-herramientas'>
              <span className='gestion-de-herramientas'>Gestion de Herramientas</span>

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
                      <input className='ej-tool' placeholder='Ej; Martillo'></input>
                      <div className='bg' />
                    </div>
                  </div>
                  <div className='phone-number'>
                    <span className='fecha-de-compra'>Fecha de Compra</span>
                    <div className='select-your-date'>
                      <div className='bg-2' />
                      <select className='seleccionar'>
                        <option value='' disabled>Select an option</option>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>

                      </select>
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
                      <input className='ej-tool' placeholder='EJ:2 años'></input>
                      <div className='bg-5' />
                    </div>
                  </div>
                  <div className='box-4'>
                    <div className='address'>
                      <span className='costo'>Costo</span>
                      <div className='address-6'>
                        <input className='ej-tool' placeholder='EJ:50000'></input>
                        <div className='bg-7' />
                      </div>
                    </div>
                    <div className='address-8'>
                      <span className='marca'>Marca</span>
                      <div className='address-9'>
                        <input className='ej-tool' placeholder='EJ:50000'></input>
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
                  <div className='folder-cross'>
                    <button></button>
                  </div>
                </div>
              </div>
              <NavLink to="/m_c_t">
              <button className='agregartool'>
                <span>Agregar</span>
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
