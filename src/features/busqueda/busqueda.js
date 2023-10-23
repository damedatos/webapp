import React, { useState } from 'react'
import { Materia } from '../materias/materias'
import buscarMaterias from './busquedaAPI'

export function Busqueda() {
    const [results, setResults] = useState([])
    const renderedResult = results.map(result => <Materia materia = {result} key = {result.id}/>)
    async function handleInput(e) {
        setResults(await buscarMaterias(e))
    }
    return(
        <div className = 'container p-3'>
            <input className = "form-control" onChange = {handleInput}/>
            <div className = 'list-group list-group-radio pt-3'>{renderedResult}</div> 
        </div>
    )
}