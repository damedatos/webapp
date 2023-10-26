import React, { useState } from 'react'
import { Materia } from '../materias/materias'

export function Busqueda() {
    const [results, setResults] = useState([])
    const renderedResult = results.map(result => <Materia materia = {result} key = {result.id}/>)
    async function handleInput(e) {
        const input = e.target.value
        setResults(await fetch(`/api/materias/buscar?q=${input}`)
            .then((res) => res.json())
            // .catch((err) => TODO)
        )
    }
    return(
        <div className = 'd-flex flex-column align-items-stretch vh-100 col-2 p-3 border-end'>
            <input className = "form-control" onChange = {handleInput}/>
            <div className = 'list-group list-group-radio mt-3 overflow-scroll'>{renderedResult}</div> 
        </div>
    )
}