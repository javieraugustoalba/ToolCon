import React, { useState, useEffect } from 'react';
import './RequestToolStoreKeeper.css';

export default function RequestToolStoreKeeper() {
  // State hooks for managing form inputs
  const [action, setAction] = useState('');
  const [tool, setTool] = useState('');
  const [operator, setOperator] = useState('');
  const [toolCode, setToolCode] = useState('');
  const [tools, setTools] = useState([]);
  const [selectedTool, setSelectedTool] = useState('');
  const [operators, setOperators] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState('');

  useEffect(() => {
    const fetchTools = async () => {
      // Fetch tools as before
    };
    const fetchOperators = async () => {
      try {
        const response = await fetch('https://localhost:7238/api/Operarios');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOperators(data);
      } catch (error) {
        console.error("Failed to fetch operators:", error);
      }
    };

    fetchTools();
    fetchOperators();
  }, []);
  // Fetch tools data from the API
  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch('https://localhost:7238/api/Herramientas');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTools(data);
      } catch (error) {
        console.error("Failed to fetch tools:", error);
      }
    };

    fetchTools();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Assuming tool and operator state variables hold the IDs of the selected tool and operator
    const asignacionData = {
      HerramientaID: tool, // Assuming this state holds the selected tool's ID
      UsuarioID: operator, // Assuming this state holds the selected operator's ID
      // Add any other properties expected by your API
    };

    try {
      const response = await fetch('https://localhost:7238/api/Herramientas/asignarHerramienta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include other headers as needed, such as Authorization for JWT
        },
        body: JSON.stringify(asignacionData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);

      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error('Error during the API call:', error);
      // Handle error (e.g., show an error message)
    }
  };


  return (
    <div className='rental-infos color-rtsk'>
      <form onSubmit={handleSubmit}>
        <div className='rental-info-1'>
          <span className='tool-requests'>Solicitudes de Herramienta</span>
          <span className='new-requests-made'>Nuevas Solicitudes Realizadas</span>
        </div>
        <div className='flex-row-ec'>
          <div className='pick-up'>
            <label className='assign'>
              <input type="radio" name="acciones" value="Asignar" className='mark' onChange={(e) => setAction(e.target.value)} /> Asignar
            </label>
            <label className='return'>
              <input type="radio" name="acciones" value="Devolver" className='mark' onChange={(e) => setAction(e.target.value)} /> Devolver
            </label>
          </div>
        </div>
        <div className='flex-row-ff'>
          <div className='locations'>
            <label htmlFor="tool" className='tool'>Herramienta</label>
            <select id="tool" name="tool" className='select-city' value={selectedTool} onChange={(e) => setSelectedTool(e.target.value)}>
              <option value="" className='select'>Seleccionar</option>
              {tools.map((tool) => (
                <option key={tool.HerramientaId} value={tool.HerramientaId}>
                  {tool.nombre} - {tool.marca}
                </option>
              ))}

            </select>
          </div>
          <div>
            <label htmlFor="operator" className='operator'>Operario</label>
            <select id="operator" name="operator" className='select-city' value={selectedOperator} onChange={(e) => setSelectedOperator(e.target.value)}>
              <option value="" className='select'>Seleccionar</option>
              {operators.map(operator => (
                <option key={operator.OperatorId} value={operator.OperatorId}>
                  {operator.nombre} {operator.apellido} 
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex-row-ff'>
          <div className='locations'>
            <label className='estado'>Estado</label>
            <span className='mostrar-estado'>Text...</span> {/* Adjust based on state if needed */}
          </div>
          <div className='locations'>
            <label className='codigo-de-la-herramienta'>Código de la Herramienta</label>
            <div className='marco-ingresar-herramienta'>
              <input className='ingresar-codigo' placeholder='Ingresar codigo' onChange={(e) => setToolCode(e.target.value)} />
            </div>
          </div>
          <div>
            <button type="submit" className='bottonloco'>
              <span>Asignar Herramienta</span>
            </button>
          </div>
        </div>
      </form>
    </div>

  );
};
