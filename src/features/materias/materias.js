import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { agregar, borrar } from './materiasSlice'

export function Materias({cuatri}) {
    const materias = useSelector(state => state.materias)
    const renderedMaterias = materias.reduce((acum, materia) => {
            if (materia.cuatri == cuatri) {
                acum.push(<Materia materia = {materia} key = {materia.id} />)
            }
            return acum
        }
    ,[])
    return(<div className = 'container d-flex flex-column'>
    <h2>{cuatri ? cuatri : '?'}</h2>
    <div className = 'list-group gap-1 overflow-scroll'>
        {renderedMaterias}
    </div></div>)
}

export function Materia({materia}) {
    const materias = useSelector(state => state.materias)
    const dispatch = useDispatch()
    function handleClick() {
        if (materias.indexOf(materia) > -1) {
            dispatch(borrar(materia))
        } else {
            dispatch(agregar(materia)) 
        }
    }
    return(<div className = 'list-group-item justify-content-between rounded border-top d-flex align-items-center' style={{height: 2*materia.cht}} onClick={handleClick}>
       <p>{materia.nombre}</p> 
       <small className = 'text-secondary'>{materia.cht}</small>
    </div>)
}