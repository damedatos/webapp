import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DndContext, DragOverlay } from '@dnd-kit/core'

import { Materia, Materias } from './features/materias/materias'
import { Busqueda } from './features/busqueda/busqueda'
import { Recomendar } from './features/recomendar/recomendar'
import { Auth } from './features/auth/auth'

import { agregar, borrar, mover } from './features/materias/materiasSlice'
import { visible } from './features/recomendar/recomendarSlice'

function App() {
  const dispatch = useDispatch()
  const [activeMateria, setActiveMateria] = useState()
  const auth = useSelector(state => state.auth)
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
    setActiveMateria(null)
    if (over) {
      dispatch(agregar(active.data.current.materia))
      dispatch(mover({id: active.data.current.materia.id, cuatri: over.data.current.cuatri}))
    } else {
      dispatch(borrar(active.data.current.materia))
    }
  }
  function handleDragStart(event) {
    const {active} = event
    setActiveMateria(active.data.current.materia)
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
    <div className = 'container-fluid'>
      {auth ? <div className = {'row' + (esVisible ? ' dropstart':' dropend')}>
        <DndContext onDragEnd = {handleDragEnd} onDragStart = {handleDragStart}>
          <DragOverlay dropAnimation={null}>
            {activeMateria ? <Materia materia = {activeMateria} id = 'mactiveMateria' key = 'mactiveMateria'/> : null}
          </DragOverlay>
          <Busqueda />
          {esVisible? <Recomendar /> : null}
          <button className='col flex-grow-0 btn dropdown-toggle border-end' onClick={handleDropend}></button>
          {renderedCuatris}
          {esVisible? null : <div className="col-1 text-body-tertiary">
            <Materias cuatri = {Math.max(...cuatris) + 1} key = {Math.max(...cuatris) + 1}/>
          </div>}
        </DndContext>
      </div> : <Auth />}
    </div> 
  )
}

export default App;