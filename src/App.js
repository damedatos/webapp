import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndContext } from '@dnd-kit/core';

import { Materias } from './features/materias/materias'
import { Busqueda } from './features/busqueda/busqueda'
import { agregar, borrar, mover } from './features/materias/materiasSlice';

function App() {
  const materias = useSelector(state => state.materias)
  const dispatch = useDispatch()
  const cuatris = materias.reduce((acum, materia) => {
    if (!acum.includes(materia.cuatri)) {
      acum.push(materia.cuatri)
    }
    return acum
  }, [0, 1, 2])
  const renderedCuatris = cuatris.map(cuatri => <div className="col"><Materias cuatri = {cuatri} key = {cuatri}/></div>)
  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState == "hidden") {
        navigator.sendBeacon("/api/log", JSON.stringify(materias))
      }
    })
  }, [])
  return (
    <div className = "row vw-100 vh-100">
      <DndContext onDragEnd = {handleDragEnd}>
        <Busqueda />
        {renderedCuatris}
        <div className="col-1 text-body-tertiary">
          <Materias cuatri = {Math.max(...cuatris) + 1} key = {Math.max(...cuatris) + 1}/>
        </div>
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
