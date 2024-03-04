import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './create-tool.css';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';


export default function CreateTool() {

  const location = useLocation();
  const toolData = location.state?.tool; // Accessing the tool data passed as state

  const [fechaCompra, setFechaCompra] = useState(toolData ? toolData.fechaCompra.split("T")[0] : '');
  const [tiempoUsoEstimado, setTiempoUsoEstimado] = useState(toolData ? toolData.tiempoUsoEstimado : '');
  const [costo, setCosto] = useState(toolData ? toolData.costo : "");
  const [estadoID, setEstadoID] = useState(toolData ? toolData.estadoID : 1);
  const navigate = useNavigate();

  const [nombre, setNombre] = useState(toolData ? toolData.nombre : '');
  const [marca, setMarca] = useState(toolData ? toolData.marca : '');
  const [herramientaId, ] = useState(toolData ? toolData.herramientaId : 0);




  useEffect(() => {
    console.log(location.state);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    try {
      const response = await fetch('https://localhost:7238/api/Herramientas/AgregarHerramientas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          HerramientaId: herramientaId,
          Nombre: nombre,
          Marca: marca,
          FechaCompra: fechaCompra,
          TiempoUsoEstimado: tiempoUsoEstimado,
          Costo: parseFloat(costo),
          EstadoID: estadoID,
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
            <div className='gherramientas-container'>
              <span className='gherramientas-heading'>Gestion de Herramientas</span>

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
                        disabled={(herramientaId !== 0)}
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
                  <NavLink to={"/tool-management"}>
                    <button type='submit' className='volver-t'>
                      <span>Volver</span>
                    </button>
                  </NavLink>
                  <button type='submit' className='agregartool'>
                    <span>{herramientaId === 0 ? "Agregar" : "Modificar"}</span>
                  </button>
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
