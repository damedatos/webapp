import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { agregar, borrar } from './materiasSlice'
import styles from './materias.module.css'

export function Materias() {
    const materias = useSelector(state => state.materias)
    const renderedMaterias = materias.map(materia => 
        <Materia materia = {materia} key = {materia.id} />
    )
    return(<section className='materias'>
        {renderedMaterias}
    </section>)
}


export function Materia({materia}) {
    const materias = useSelector(state => state.materias)
    const dispatch = useDispatch()
    function handleClick(e) {
        if (materias.indexOf(materia) > -1) {
            dispatch(borrar(materia))
        } else {
            dispatch(agregar(materia)) 
        }
    }
    return(<div className = 'materia' onClick={handleClick}>
       <h3>{materia.nombre}</h3> 
       <p className = 'materia-content'>{materia.cht}</p>
    </div>)
}