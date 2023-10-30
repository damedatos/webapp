import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useDroppable, useDraggable } from '@dnd-kit/core';

import { agregar, borrar } from './materiasSlice'

export function Materias({cuatri}) {
    const materias = useSelector(state => state.materias)
    const {setNodeRef} = useDroppable({
        id: cuatri,
        data: {
            cuatri: cuatri
        }
    })
    const renderedMaterias = materias.reduce((acum, materia) => {
            if (materia.cuatri == cuatri) {
                acum.push(<Materia materia = {materia} key = {materia.id} />)
            }
            return acum
        }
    ,[])
    return(<div className = 'd-flex flex-column vh-100' ref = {setNodeRef}>
    <h2>{cuatri ? cuatri : '?'}</h2>
    <div className = 'list-group gap-1'>
        {renderedMaterias}
    </div></div>)
}

export function Materia({materia}) {
    const materias = useSelector(state => state.materias)
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: materia.id,
        data: {
            materia: materia
        }
    })
    const dispatch = useDispatch()
    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        height: 2*materia.cht,
      };

    function handleClick() {
        if (materias.indexOf(materia) > -1) {
            dispatch(borrar(materia))
        } else {
            dispatch(agregar(materia)) 
        }
    }
    return(<div className = 'list-group-item justify-content-between rounded border-top d-flex align-items-center' style={style} ref = {setNodeRef} {...listeners} {...attributes}>
       <p>{materia.nombre}</p> 
       <small className = 'text-secondary'>{materia.cht}</small>
    </div>)
}