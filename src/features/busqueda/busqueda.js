import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { agregar, borrar } from '../materias/materiasSlice'
import { Materia } from '../materias/materias'
import buscarMaterias from './busquedaAPI'

export function Busqueda() {
    const [results, setResults] = useState([])
    const renderedResult = results.map(result =>
        <li key = {result.id}>
            <Materia materia = {result} />
        </li>
    )
    async function handleInput(e) {
        setResults(await buscarMaterias(e))
    }
    return(
        <section className = 'busqueda'>
            <input name='busqueda' onChange = {handleInput}/>
            <ul>{renderedResult}</ul> 
        </section>
    )
}