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
    'Fuego': '&#128293;'
}

export function Materias({cuatri}) {
    const materias = useSelector(state => state.materias)
    const renderedMaterias = materias.reduce((acum, materia) => {
        if (materia.cuatri == cuatri) {
            acum.push(<Materia materia = {materia} id = {'m' + materia.id} key = {'b' + materia.id} />)
        }
        return acum
    },[])
    const cht = materias.reduce((acum, materia) => {
        if (materia.cuatri == cuatri) {
            acum += materia.cht
        }
        return acum
    }
    , 0)
    const {setNodeRef} = useDroppable({
    id: cuatri,
        data: {
            cuatri: cuatri
        }
    })
    return(<div className = 'd-flex flex-column h-100 pt-2' ref = {setNodeRef}>
        <h2>{cuatri ? cuatri : '?'}</h2>
        <div className = 'list-group gap-3 mb-auto overflow-x-hidden'>
            {renderedMaterias}
        </div>
        {cht > 0 ?
        <div className = 'row text-center justify-content-around'>
            <div className='col'>{'CHS: ' + cht /16}</div>
            <div className='col'>{'CHT: ' + cht}</div>
        </div> : null}
    </div>)
}

export function Materia({materia, id}) {
const {attributes, listeners, setNodeRef} = useDraggable({
        id: id,
        data: {
            materia: materia
        }
    })
    return(<div className = {'list-group-item card border bg-light'}
        style={{height: id[0] == 'm' ? 2*materia.cht : false}}
        ref = {setNodeRef}
        {...listeners} {...attributes}>
            <div className='card-body'>
                <div className='card-title'>{materia.nombre}</div> 
                <div className='row justify-content-around'>
                    <div className='col card-subtitle text-secondary'>{'CHT: ' + materia.cht}</div>
                    <div className='col text-end' dangerouslySetInnerHTML={{__html: materia.score > 10 ? emoji['Fuego'] : null}}></div>
                </div>
                <div className = 'card-text' dangerouslySetInnerHTML={{__html: materia.tags ? materia.tags.map(tag => emoji[tag]).join(' ') : null}}></div>
            </div>
    </div>)
}