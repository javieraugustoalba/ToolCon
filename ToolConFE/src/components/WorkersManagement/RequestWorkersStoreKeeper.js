import React from 'react';
import '../../components/Styles.css';
import './RequestWorkersStoreKeeper.css'

export default function RequestWorkersStoreKeeper() {
  return (
<div className='recent-transaction'>
          <div className='flex-row-ef'>
              <div className='car-name' />
              <span className='solicitudes-de-operarios'>
                  Solicitudes de Operarios
              </span>
          </div>
          <div className='recent-transaction-e'>
              <div className='div-recent-transaction'>
                  <div className='div-flex-row-bc'>
                      <div className='div-car-name-17'>
                          <div className='div-image' />
                          <div/>
                      </div>
                    <span className='span-nombre'>Armando Casas</span>
                  </div>
                  <span className='span-pedido'>Martillo percutor, Serrucho, Pinzas</span>
                    <button className='button-rent'>
                        <span className='span-asignar'>Asignar</span>
                    </button>
                  <div className='div-line-1d' />
              </div>
              <div className='div-recent-transaction'>
                  <div className='div-flex-row-bc'>
                      <div className='div-car-name-17'>
                          <div className='div-image' />
                          <div/>
                      </div>
                    <span className='span-nombre'>Pero Perez</span>
                  </div>
                  <span className='span-pedido'>Serrucho, Pinza</span>
                    <button className='button-rent'>
                        <span className='span-asignar'>Asignar</span>
                    </button>
                  <div className='div-line-1d' />
              </div>
              <div className='div-recent-transaction'>
                  <div className='div-flex-row-bc'>
                      <div className='div-car-name-17'>
                          <div className='div-image' />
                          <div/>
                      </div>
                    <span className='span-nombre'>Octavia Wonkru</span>
                  </div>
                  <span className='span-pedido'>Serrucho, Pinza</span>
                    <button className='button-rent'>
                        <span className='span-asignar'>Asignar</span>
                    </button>
                  <div className='div-line-1d' />
              </div>
          </div>
      </div>
  );
}
