import React from 'react'
import { useSelector } from 'react-redux';
import { useDroppable, useDraggable } from '@dnd-kit/core';

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
                acum.push(<Materia materia = {materia} id = {'m' + materia.id} key = {materia.id} />)
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

export function Materia({materia, id}) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id,
        data: {
            materia: materia
        }
    })
    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        height: 2*materia.cht,
      };
    return(<div className = 'list-group-item justify-content-between rounded border d-flex align-items-center'
        style={style}
        ref = {setNodeRef}
        {...listeners} {...attributes}>
       <div>{materia.nombre}</div> 
       <small className = 'text-secondary ms-3'>{materia.cht}</small>
    </div>)
}