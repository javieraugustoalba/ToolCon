import React, { useState, useEffect } from 'react';
import './RequestToolStoreKeeper.css';

export default function RequestToolStoreKeeper() {
  const [tools, setTools] = useState([]);
  const [selectedTool, setSelectedTool] = useState('');
  const [operators, setOperators] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState('');
  const [selectedToolEstadoID, setSelectedToolEstadoID] = useState('');
  const [selectedToolHerramientaId, setSelectedToolHerramientaId] = useState('');

  useEffect(() => {
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


  // Adjusted handler for tool selection
  const handleToolChange = (e) => {
    const toolId = e.target.value;
    setSelectedTool(toolId);

    // Find the selected tool from the tools array
    const tool = tools.find(t => t.herramientaId.toString() === toolId);
    if (tool) {
      setSelectedToolEstadoID(tool.estadoID === 1 ? "Disponible" : "En uso"); // Update EstadoID based on selected tool
      setSelectedToolHerramientaId(tool.herramientaId); // Update HerramientaId based on selected tool
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const prestamo = {
      HerramientaID: parseInt(selectedTool, 10), // Ensure integer value
      UsuarioID: parseInt(selectedOperator, 10), // Ensure integer value
    };

    try {
      const response = await fetch('https://localhost:7238/api/Herramientas/asignarHerramienta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include other headers as needed, such as Authorization for JWT
        },
        body: JSON.stringify(prestamo) // Directly sending the prestamo object
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
  console.log(selectedToolEstadoID); // Add this line

  return (
    <div className='rental-infos color-rtsk'>
      <form onSubmit={handleSubmit}>
        <div className='rental-info-1'>
          <span className='tool-requests'>Solicitudes de Herramienta</span>
          <span className='new-requests-made'>Nuevas Solicitudes Realizadas</span>
        </div>
        <div className='flex-row-ff'>
          <div className='locations'>
            <label htmlFor="tool" className='tool'>Herramienta</label>
            <select id="tool" name="tool" className='select-city' value={selectedTool} onChange={handleToolChange}>
              <option value="" className='select'>Seleccionar</option>
              {tools.map((tool) => (
                <option key={tool.herramientaId} value={tool.herramientaId}>
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
                <option key={operator.usuarioID} value={operator.usuarioID}>
                  {operator.nombre} {operator.apellido}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex-row-ff'>
          <div className='locations'>
            <label className='estado'>Estado</label>
            <span className='mostrar-estado'>{selectedToolEstadoID}</span>
          </div>
          <div className='locations'>
            <label className='codigo-de-la-herramienta'>Código de la Herramienta</label>
            <span className='mostrar-estado'>{selectedToolHerramientaId}</span>
          </div>
          <div>
            <button type="submit"
              className={`bottonloco ${selectedToolEstadoID === "En uso" ? 'disabled' : ''}`} 
              disabled={(selectedToolEstadoID === "En uso")}>
              <span>{selectedToolEstadoID === "En uso" ? 'Herramienta Asignada' : 'Asignar Herramienta'}</span>
            </button>
          </div>
        </div>
      </form>
    </div>

  );
};
