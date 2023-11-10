import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Materia } from '../materias/materias'

export function Busqueda() {
    const materias = useSelector(state => state.materias)
    const recomendadas = useSelector(state => state.recomendadas)
    const [busqueda, setBusqueda] = useState([])
    const renderedBusqueda = busqueda.map(materia => <Materia materia = {materia} id = {'b' + materia.id} key = {materia.id}/>)
    const renderedRecomendadas = recomendadas.map(materia => <Materia materia = {materia} id = {'r' + materia.id} key = {materia.id}/>) 
    async function handleInput(e) {
        const input = e.target.value
        setBusqueda(await fetch(`/api/materias/buscar?q=${input}`)
            .then((res) => res.json())
            // .catch((err) => TODO)
        )
    }
    return(
        <div className = 'd-flex flex-column col-2 p-3 border-end h-100 secondary'>
            <input className = "form-control" onChange = {handleInput}/>
            <div className = 'list-group gap-2 mt-3'>
                {renderedRecomendadas}
            </div>
            <div className = 'list-group gap-2 mt-3 overflow-y-scroll overflow-x-hidden mb-auto'>
                {renderedBusqueda}
            </div>
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