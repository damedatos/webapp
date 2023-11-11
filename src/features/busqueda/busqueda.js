import React, { useState } from 'react'
import { Materia } from '../materias/materias'

export function Busqueda() {
    const [busqueda, setBusqueda] = useState([])
    const renderedBusqueda = busqueda.map(materia => <Materia materia = {materia} id = {'b' + materia.id} key = {materia.id}/>)
    async function handleInput(e) {
        const input = e.target.value
        setBusqueda(await fetch(`/api/materias/buscar?q=${input}`)
            .then((res) => res.json())
            // .catch((err) => TODO)
        )
    }

    return(
        <div className = 'd-flex flex-column col-md-2 h-100 p-3'>
            <input className = 'form-control' onChange = {handleInput} placeholder='&#128270;'/>
            <div className = 'list-group gap-2 overflow-y-scroll overflow-x-hidden mt-3'>
                {renderedBusqueda}
            </div>
        </div>
    )
}