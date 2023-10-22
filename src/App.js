import React from 'react';
import { Materias } from './features/materias/materias'
import { Busqueda } from './features/busqueda/busqueda'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Busqueda />
        <Materias />
      </header>
    </div>
  );
}

export default App;
