import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';


export default function CreateOperator() {
  const navigate = useNavigate();
  const location = useLocation();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rolID, setRolID] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const rolesData = [
    { RolID: 1, Nombre: 'Operario' },
    { RolID: 2, Nombre: 'Almacenista' },
    { RolID: 3, Nombre: 'Jefe de Almacén' },
  ];
  // Check if we're editing an existing worker and prepopulate the form
  useEffect(() => {
    if (location.state && location.state.worker) {
      const { worker } = location.state;
      setNombre(worker.nombre);
      setApellido(worker.apellido);
      setEmail(worker.email);
      setPassword(worker.contraseña); // Assuming you have access to the password, which is typically not recommended
      setRolID(worker.rolID);
      setIsEditing(true);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const operarioData = {
      UsuarioID: isEditing ? location.state.worker.usuarioID : 0,
      nombre,
      apellido,
      email,
      contraseña: password,
      rolID: parseInt(rolID),
    };
    

    const endpoint = '/api/Operarios/CrearModificarOperario';

    try {
      const response = await fetch(`https://localhost:7238${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(operarioData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Handle response...
      console.log('Operario processed successfully.');
      navigate('/workers-management');
    } catch (error) {
      console.error('Error processing operario:', error);
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className='main-container'>
          <LeftNav />
          <div className='flex-column-a'>
            <div className='gherramientas-container'>
              <span className='gherramientas-heading'>{isEditing ? 'Editar Operario' : 'Crear Operario'}</span>
              {/* Form for creating/editing operario */}
              <form onSubmit={handleSubmit}>
                {/* Your form fields here */}
                <div className='billing-info'>
                  <div className='billing-info-1'>
                    <span className='crear-herramienta'>Crear Operario</span>
                    <span className='ingrese-los-datos'>
                      Ingrese los Datos del operario que va a usar ToolCon
                    </span>
                  </div>
                  <div className='flex-row-cdc'>
                    <div className='name'>
                      <span className='nombre-de-la-herramienta'>
                        Nombre del Operario
                      </span>
                      <div className='your-name'>
                        <input className='ej-tool' placeholder='Ej; Armando' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                      </div>
                    </div>
                    <div className='phone-number'>
                      <span className='fecha-de-compra'>Apellido</span>
                      <div className='select-your-date'>
                        <input className='ej-tool' placeholder='Ej: Suarez' value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
                      </div>
                    </div>
                  </div>
                  <div className='flex-row-cac'>
                    <div className='town-or-city'>
                      <span className='tiempo-de-uso'>Contraseña </span>
                      <div className='town-or-city-4'>
                        <input className='ej-tool' placeholder='EJ:123546password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                      </div>
                    </div>
                    <div className='box-4'>
                      <div className='address'>
                        <span className='costo'>Rol</span>
                        <div className='address-6'>
                          <select className='ej-tool' value={rolID} onChange={(e) => setRolID(e.target.value)}>
                            <option value=''>Seleccione un rol</option>
                            {rolesData.map((role) => (
                              <option key={role.RolID} value={role.RolID}>
                                {role.Nombre}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <span className='estado-herramienta'>Correo Electronico</span>
                    <div className='address-d'>
                      <input className='ej-tool' placeholder='EJ:hackme@inorca.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                  </div>
                </div>
                <NavLink to={'/workers-management'}>
                <button className='volver-o'>
                  <span>Volver</span>
                </button>
              </NavLink>
              <button type="submit" className='modificar-o'>
                <span>{isEditing ? 'Actualizar' : 'Agregar'}</span>
              </button>
              </form>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
