import React from 'react';
import { Materias } from './features/materias/materias'
import { Busqueda } from './features/busqueda/busqueda'
import { Info } from './features/info/info'

function App() {
  return (
     <div className = "row">
        <div className = "sidebar col-2">
          <Busqueda />
        </div>
        <main className = "col">
          <Materias />
          {/* <Info /> */}
        </main>
      </div>
  );
}

export default App;
