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
    return(<div className = "container p-2">
    <h2>{cuatri}</h2>
    <div className = 'list-group list-group-radio'>
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
    return(<div className = 'list-group-item rounded' onClick={handleClick}>
       <h3>{materia.nombre}</h3> 
       <p className = 'materia-content'>{materia.cht}</p>
    </div>)
}