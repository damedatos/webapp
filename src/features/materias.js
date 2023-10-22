import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { agregar, borrar } from './materiasSlice'
import styles from './materias.module.css'

export function Materias() {
    const materias = useSelector(state => state.materias)
    const renderedMaterias = materias.map(materia => 
        <Materia materia = {materia} />
    )
    return <section className='materias'>
        {renderedMaterias}
    </section>
}


export function Materia({materia}) {
    return <article className = 'materia' key = {materia.id}>
       <h3>{materia.nombre}</h3> 
       <p className = 'materia-content'>{materia.cht}</p>
    </article>
}