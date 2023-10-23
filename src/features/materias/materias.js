import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { agregar, borrar } from './materiasSlice'

export function Materias() {
    const materias = useSelector(state => state.materias)
    const renderedMaterias = materias.map(materia => 
        <Materia materia = {materia} key = {materia.id} />
    )
    return(<div className = 'list-group list-group-radio'>
        {renderedMaterias}
    </div>)
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