import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './create-tool.css';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';


export default function ModificarTool() {

  return (
    <>
      <div>
        <Header></Header>
        <div className='main-container'>
          <LeftNav></LeftNav>
          <div className='flex-column-a'>
            <div className='gherramientas-container'>
              <span className='gherramientas-heading'>Gestion de Herramientas</span>

              <div className='billing-info'>
                <div className='billing-info-1'>
                  <span className='crear-herramienta'>Modificar Herramienta</span>
                  <span className='ingrese-los-datos'>
                    Ingrese los Datos A Modificar 
                  </span>
                </div>

                {/* El resto de tu componente, incluyendo el formulario */}
                <form>
                  <div className='flex-row-cdc'>
                    <div className='name'>
                      <span className='nombre-de-la-herramienta'>Nombre de la Herramienta</span>
                      <div className='your-name'>
                        <input
                          className='ej-tool'
                          placeholder='Ej; Martillo'
                        />
                      </div>
                    </div>
                    <div className='phone-number'>
                      <span className='fecha-de-compra'>Fecha de Compra</span>
                      <input
                        type="date"
                        className='ej-tool'
                      />
                    </div>
                  </div>
                  <div className='flex-row-cac'>
                    <div className='town-or-city'>
                      <span className='tiempo-de-uso'>Tiempo de Uso</span>
                      <input
                        className='ej-tool'
                        placeholder='EJ:2 años'
                      />
                    </div>
                    <div className='box-4'>
                      <div className='address'>
                        <span className='costo'>Costo</span>
                        <input
                          className='ej-tool'
                          placeholder='EJ:50000'
                        />
                      </div>
                      <div className='address-8'>
                        <span className='marca'>Marca</span>
                        <input
                          className='ej-tool'
                          placeholder='EJ: MarcaA'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='review'>
                    <div className='address-c'>
                      <span className='estado-herramienta'>Estado de la Herramienta</span>
                      <select
                        className='select-soli'
                      >
                        <option value=''>Seleccione un estado</option>
                        <option value='1'>Disponible</option>
                        <option value='2'>En uso</option>
                      </select>
                    </div>
                    {/* Campo para la foto no incluido, asumiendo manejo de archivos */}
                  </div>
                  <NavLink to={"/tool-management"}>
                  <button type='submit' className='volver-t'>
                    <span>Volver</span>
                  </button>
                  </NavLink>
                  <NavLink to={"/m_m_t"}>
                  <button type='submit' className='modificar-t'>
                    <span>Modificar</span>
                  </button>
                  </NavLink>
                </form>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
