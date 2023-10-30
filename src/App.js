import React from 'react';
import { useDispatch } from 'react-redux';
import { DndContext } from '@dnd-kit/core';

import { Materias } from './features/materias/materias'
import { Busqueda } from './features/busqueda/busqueda'
import { Info } from './features/info/info'
import { agregar, borrar, mover } from './features/materias/materiasSlice';

function App() {
  const dispatch = useDispatch()
  return (
    <div className = "row vw-100 vh-100">
      <DndContext onDragEnd = {handleDragEnd}>
        <Busqueda />
        <div className = "col">
          <Materias cuatri = {0}/>
        </div>
        <div className = "col">
        <Materias cuatri = {1}/>
        </div>
        <div className = "col">
          <Materias cuatri = {2}/>
        </div>
        {/* <Info /> */}
      </DndContext>
    </div>
  );
  function handleDragEnd(event) {
    const {active, over} = event
    if (over) {
      dispatch(agregar(active.data.current.materia))
      dispatch(mover({id: active.data.current.materia.id, cuatri: over.data.current.cuatri}))
    } else {
      dispatch(borrar(active.data.current.materia))
    }
  }
}

export default App;
