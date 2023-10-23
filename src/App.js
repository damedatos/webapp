import React from 'react';
import { Materias } from './features/materias/materias'
import { Busqueda } from './features/busqueda/busqueda'
import { Info } from './features/info/info'

function App() {
  return (
     <div className = "row">
        <div className = "sidebar col-2 border-end p-3">
          <Busqueda />
        </div>
          <div className = "col">
            <Materias cuatri = {undefined}/>
          </div>
          <div className = "col">
            <Materias cuatri = {1}/>
          </div>
          <div className = "col">
            <Materias cuatri = {2}/>
          </div>
          {/* <Info /> */}
      </div>
  );
}

export default App;
