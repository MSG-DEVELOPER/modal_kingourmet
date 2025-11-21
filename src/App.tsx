import DataModal from './DataModal.tsx'
import { useState } from 'react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Datos de ejemplo para la tabla
  const sampleData = [
    { Mesa: 1, Comensales: 4, Estado: "Libre" },
    { Mesa: 2, Comensales: 2, Estado: "Ocupada" },
    { Mesa: 3, Comensales: 6, Estado: "Reservada" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => setIsModalOpen(true)}>Abrir Modal</button>

      <DataModal
        isOpen={isModalOpen}           // boolean para abrir/cerrar
        onClose={() => setIsModalOpen(false)}  // función para cerrar
        data={sampleData}              // array de objetos para la tabla
        showSearchBar={true}           // muestra barra de búsqueda
        showFilterIcon={true}          // muestra icono de filtro
      />
    </div>
  );
};

export default App;