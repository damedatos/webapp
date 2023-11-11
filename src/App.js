import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndContext } from '@dnd-kit/core';

import { Materias } from './features/materias/materias'
import { Busqueda } from './features/busqueda/busqueda'
import { Recomendar } from './features/recomendar/recomendar';
import { agregar, borrar, mover } from './features/materias/materiasSlice';
import { visible } from './features/recomendar/recomendarSlice'

function App() {
  const dispatch = useDispatch()
  const materias = useSelector(state => state.materias)
  const esVisible = useSelector(state => state.recomendadas.visible)
  const cuatris = materias.reduce((acum, materia) => {
    if (!acum.includes(materia.cuatri)) {
      acum.push(materia.cuatri)
    }
    return acum
  }, [0, 1, 2])
  const renderedCuatris = cuatris.map(cuatri => <div className="col"><Materias cuatri = {cuatri} key = {cuatri}/></div>)
  
  function handleDragEnd(event) {
    const {active, over} = event
    if (over) {
      dispatch(agregar(active.data.current.materia))
      dispatch(mover({id: active.data.current.materia.id, cuatri: over.data.current.cuatri}))
    } else {
      dispatch(borrar(active.data.current.materia))
    }
  }

  function handlePageClose() {
    if (document.visibilityState == "hidden") {
      navigator.sendBeacon("/api/log", JSON.stringify(materias))
    }
  }
  function handleDropend() {
    dispatch(visible())
  }
  useEffect(() => {
    document.addEventListener("visibilitychange", handlePageClose)
    return () => document.removeEventListener("visibilitychange", handlePageClose)
  }, [handlePageClose])
  
  return (
    <div className = {'row vw-100 vh-100 p-1 overflow-x-hidden' + (esVisible ? ' dropstart':' dropend')}>
      <DndContext onDragEnd = {handleDragEnd}>
        <Busqueda />
        {esVisible? <Recomendar /> : null}
        <button className='col flex-grow-0 btn dropdown-toggle border-end' onClick={handleDropend}></button>
        {renderedCuatris}
        {esVisible? null : <div className="col-1 text-body-tertiary">
          <Materias cuatri = {Math.max(...cuatris) + 1} key = {Math.max(...cuatris) + 1}/>
        </div>}
      </DndContext>
    </div>
  )
}

export default App;