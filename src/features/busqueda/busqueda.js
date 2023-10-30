import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Materia } from '../materias/materias'

export function Busqueda() {
    const materias = useSelector(state => state.materias)
    const [results, setResults] = useState([])
    const renderedResult = results.map(result => <Materia materia = {result} id = {'b' + result.id} key = {result.id}/>)
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
            <div className = 'list-group gap-1 mt-3 overflow-y-scroll overflow-x-hidden mb-auto'>{renderedResult}</div>
            <hr className='mt-3 mb-3'></hr>
            <div className = 'd-flex align-items-center'>
                <div>CHT: {materias.reduce((acum, materia) => {
                        if (materia.cuatri) {
                            acum += materia.cht
                        }
                        return acum
                    }
                , 0)}</div>
                <div className = 'text-secondary'>/ 640</div>
            </div>
        </div>
    )
}