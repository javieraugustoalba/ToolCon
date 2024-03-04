import React from 'react';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import { NavLink } from 'react-router-dom';


export default function ModificarOperator() {
  return (
    <>
      <div>
        <Header></Header>
        <div className='main-container'>
          <LeftNav></LeftNav>
          <div className='flex-column-a'>
            <div className='gherramientas-container'>
              <span className='gherramientas-heading'>Gestion de Operarios</span>

              <div className='billing-info'>
                <div className='billing-info-1'>
                  <span className='crear-herramienta'>Modificar Operario</span>
                  <span className='ingrese-los-datos'>
                    Ingrese los datos a cambiar del operario que usa ToolCon
                  </span>
                </div>
                <div className='flex-row-cdc'>
                  <div className='name'>
                    <span className='nombre-de-la-herramienta'>
                      Nombre del Operario
                    </span>
                    <div className='your-name'>
                      <input className='ej-tool' placeholder='Ej; Armando'></input>
                      <div className='bg' />
                    </div>
                  </div>
                  <div className='phone-number'>
                    <span className='fecha-de-compra'>Apellido</span>
                    <div className='select-your-date'>
                      <div className='bg-2' />
                      <input className='ej-tool' placeholder='Ej: Suarez'></input>
                      <div className='vuesax-outline-arrow-down'>
                        <div className='vuesax-outline-arrow-down-3' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex-row-cac'>
                  <div className='town-or-city'>
                    <span className='tiempo-de-uso'>Contraseña </span>
                    <div className='town-or-city-4'>
                      <div className='bg-5' />
                      <input className='ej-tool' placeholder='EJ:123546password'></input>
                    </div>
                  </div>
                  <div className='box-4'>
                    <div className='address'>
                      <span className='costo'>RollID</span>
                      <div className='address-6'>
                        <input className='ej-tool' placeholder='EJ:5418'></input>
                        <div className='bg-7' />
                      </div>
                    </div>               
                  </div>
                </div>
              </div>
              <div>
                <div className='address-o'>
                  <span className='estado-herramienta'>Correo Electronico</span>
                  <div className='address-d'>
                    <input className='ej-tool' placeholder='EJ:hackme@inorca.com'></input>
                    <div className='bg-e' />
                  </div>
                </div>
              </div>
              <NavLink to={'/workers-management'}>
              <button className='volver-o'>
                <span>Volver</span>
              </button>
              </NavLink>
              <NavLink to={'/m_m_o'}>
              <button className='modificar-o'>
                <span>Modificar</span>
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
