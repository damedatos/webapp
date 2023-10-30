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
        <div className = 'd-flex flex-column col-2 p-3 border-end vh-100'>
            <input className = "form-control" onChange = {handleInput}/>
            <div className = 'list-group gap-1 overflow-scrol'>{renderedResult}</div> 
        </div>
    )
}