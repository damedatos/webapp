import React from 'react'
import { useSelector } from 'react-redux';
import { useDroppable, useDraggable } from '@dnd-kit/core';
const emoji = {
    'Analisis': '&#128200;',
    'Algebra': '&#128290;',
    'Algoritmos': '&#128187;',
    'IA': '&#129504;',
    'Estadistica': '&#128302;',
    'Operativa': '&#128224;',
    'Fisica': '&#127756;',
    'Quimica': '&#129514;',
    'Biologia': '&#127793;',
    'Geo': '&#127758;',
}

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
    return(<div className = 'd-flex flex-column h-100 mt-2' ref = {setNodeRef}>
    <h2>{cuatri ? cuatri : '?'}</h2>
    <div className = 'list-group gap-3'>
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
        height: id[0] == 'm' ? 2*materia.cht : false,
    }
    return(<div className = {(id[0] == 'r' ? 'active ' : '') + 'list-group-item card border'}
        style={style}
        ref = {setNodeRef}
        {...listeners} {...attributes}>
            <div className='card-body'>
                <div className='text-secondary'>{'CHT: ' + materia.cht}</div>
                <div className='card-title'>{materia.nombre}</div> 
                <div className = 'card-subtitle' dangerouslySetInnerHTML={{ __html: materia.tags.map(tag => emoji[tag]).join(' ') }}></div>
            </div>
    </div>)
}