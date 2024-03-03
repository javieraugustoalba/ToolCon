import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './create-tool.css';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';


export default function CreateTool() {
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [fechaCompra, setFechaCompra] = useState('');
  const [tiempoUsoEstimado, setTiempoUsoEstimado] = useState('');
  const [costo, setCosto] = useState('');
  const [estadoID, setEstadoID] = useState('');
  const navigate = useNavigate(); 
  // Esta función maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    try {
      const response = await fetch('https://localhost:7238/api/Herramientas/AgregarHerramientas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Nombre: nombre,
          Marca: marca,
          FechaCompra: fechaCompra,
          TiempoUsoEstimado: tiempoUsoEstimado,
          Costo: parseFloat(costo),
          EstadoID: estadoID === "Disponible" ? 1 : 2,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Herramienta agregada correctamente.');
      navigate('/m_c_t');
      // Aquí puedes manejar acciones post-creación, como redireccionar al usuario
    } catch (error) {
      console.error('Error al agregar la herramienta:', error);
    }
  };

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

                {/* El resto de tu componente, incluyendo el formulario */}
                <form onSubmit={handleSubmit}>
                  <div className='flex-row-cdc'>
                    <div className='name'>
                      <span className='nombre-de-la-herramienta'>Nombre de la Herramienta</span>
                      <div className='your-name'>
                        <input
                          className='ej-tool'
                          placeholder='Ej; Martillo'
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='phone-number'>
                      <span className='fecha-de-compra'>Fecha de Compra</span>
                      <input
                        type="date"
                        className='ej-tool'
                        value={fechaCompra}
                        onChange={(e) => setFechaCompra(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='flex-row-cac'>
                    <div className='town-or-city'>
                      <span className='tiempo-de-uso'>Tiempo de Uso</span>
                      <input
                        className='ej-tool'
                        placeholder='EJ:2 años'
                        value={tiempoUsoEstimado}
                        onChange={(e) => setTiempoUsoEstimado(e.target.value)}
                      />
                    </div>
                    <div className='box-4'>
                      <div className='address'>
                        <span className='costo'>Costo</span>
                        <input
                          className='ej-tool'
                          placeholder='EJ:50000'
                          value={costo}
                          onChange={(e) => setCosto(e.target.value)}
                        />
                      </div>
                      <div className='address-8'>
                        <span className='marca'>Marca</span>
                        <input
                          className='ej-tool'
                          placeholder='EJ: MarcaA'
                          value={marca}
                          onChange={(e) => setMarca(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='review'>
                    <div className='address-c'>
                      <span className='estado-herramienta'>Estado de la Herramienta</span>
                      <select
                        className='select-soli'
                        value={estadoID}
                        onChange={(e) => setEstadoID(e.target.value)}
                      >
                        <option value=''>Seleccione un estado</option>
                        <option value='1'>Disponible</option>
                        <option value='2'>En uso</option>
                      </select>
                    </div>
                    {/* Campo para la foto no incluido, asumiendo manejo de archivos */}
                  </div>
                  <button type='submit' className='agregartool'>
                    <span>Agregar</span>
                  </button>
                </form>
              </div>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
