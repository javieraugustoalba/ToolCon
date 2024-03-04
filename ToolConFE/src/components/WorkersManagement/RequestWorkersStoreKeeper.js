import React, { useState, useEffect } from 'react';
import '../../components/Styles.css';
import './RequestWorkersStoreKeeper.css'

export default function RequestWorkersStoreKeeper() {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    const fetchSolicitudesPendientes = async () => {
      try {
        const response = await fetch('https://localhost:7238/api/Herramientas/SolicitudesPendientes');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSolicitudes(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch pending requests:", error);
      }
    };

    fetchSolicitudesPendientes();
  }, []);

  const actualizarPrestamoYHerramienta = async (prestamoId) => {
    try {
      const response = await fetch(`https://localhost:7238/api/Herramientas/ActualizarPrestamoYHerramienta/${prestamoId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Agrega aquí cualquier header adicional como tokens de autenticación
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Prestamo y Herramienta actualizados correctamente.');
      // Aquí puedes, por ejemplo, recargar la lista de solicitudes para reflejar los cambios
    } catch (error) {
      console.error('Error al actualizar el préstamo y la herramienta:', error);
    }
  };


  return (
    
    <div className='recent-transaction'>
      <div className='flex-row-ef'>
              <div className='car-name' />
              <span className='solicitudes-de-operarios'>
                  Solicitudes de Operarios
              </span>
          </div>
      {solicitudes.map((solicitud, index) => (
        <div key={index} className='div-recent-transaction'>
          <div className='div-flex-row-bc'>
            <div className='div-car-name-17'>
              <div className='div-image' />
              {/* Aquí podrías poner una imagen relacionada con el usuario o la herramienta si tienes una */}
            </div>
            <span className='span-nombre'>{solicitud.usuarioNombre}</span>
          </div>
          <div className='div-flex-row-bc'>
            <div className='div-car-name-17'>
            <span className='span-pedido'>{solicitud.nombreHerramienta}</span>

        
            </div>
            <button className='button-rent' onClick={() => actualizarPrestamoYHerramienta(solicitud.prestamoID)}>
            <span className='span-asignar'>Asignar</span>
          </button>
          </div>
          <div className='div-line-1d' />
        </div>
      ))}

    </div>
  );
}
