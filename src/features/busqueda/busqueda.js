import React, { useState } from 'react'
import { Materia } from '../materias/materias'

export function Busqueda() {
    const [nuevaMateria, setNuevamateria] = useState()
    const [busqueda, setBusqueda] = useState([])
    const renderedBusqueda = busqueda.map(materia => <Materia materia = {materia} id = {'b' + materia.id} key = {'b' + materia.id}/>)
    renderedBusqueda.sort((mat1, mat2) => mat2.score - mat1.score)
    async function handleInput(e) {
        const input = e.target.value
        const data = {id: -1, nombre: input, cht: 96}
        setNuevamateria(<Materia materia = {data} id = {'n' + data.id} key = {'n' + data.id}/>)
        setBusqueda(await fetch(`/api/materias/buscar?q=${input}`)
            .then((res) => res.json())
            // .catch((err) => TODO)
        )
    }

    return(
        <div className = 'd-flex flex-column col-md-2 p-3 vh-100'>
            <input className = 'form-control' onChange = {handleInput} placeholder='&#128270;'/>
            <div className = 'list-group gap-2 mt-3 flex-grow-1 overflow-x-hidden overflow-y-scroll'>
                {renderedBusqueda}
                {nuevaMateria}
            </div>
        </div>
    )
}