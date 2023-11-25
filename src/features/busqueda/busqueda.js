import React, { useEffect, useState } from 'react'
import { Materia } from '../materias/materias'

export function Busqueda() {
    const [nuevaMateria, setNuevamateria] = useState()
    const [busqueda, setBusqueda] = useState([])
    const renderedBusqueda = busqueda.map(materia => <Materia materia = {materia} id = {'b' + materia._id} key = {'b' + materia._id}/>)
    renderedBusqueda.sort((mat1, mat2) => mat2.score - mat1.score)
    async function handleInput(e) {
        const input = e.target.value
        const data = {_id: -1, nombre: input, cht: 96}
        setNuevamateria(<Materia materia = {data} id = {'n' + data._id} key = {'n' + data._id}/>)
        setBusqueda(await fetch(`/api/materias/buscar?q=${input}`)
            .then(res => res.json())
            // .catch((err) => TODO)
        )
    }
    useEffect(() => {handleInput({target: {value: ""}})}, [])
    return(
        <div className = 'd-flex flex-column col-md-2 p-3 vh-100'>
            <input className = 'form-control' onChange = {handleInput} placeholder='&#128270;'/>
            <div className = 'list-group gap-2 mt-3 flex-grow-1 overflow-x-hidden overflow-y-scroll'>
                {renderedBusqueda}
                {renderedBusqueda.length == 0 ? <p className='text-secondary'>Esta materia todavia no esta en la base</p> : null}
                {nuevaMateria}
            </div>
        </div>
    )
}