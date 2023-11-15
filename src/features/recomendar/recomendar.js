import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Materia } from '../materias/materias'

const departamentos = ["DA", "DB", "DC", "DF", "DM", "IC"]

export function Recomendar() {
    const [filtros, setFiltros] = useState(departamentos)
    const recomendadas = useSelector(state => state.recomendadas.materias)
    const materias = useSelector(state => state.materias)
    const renderedRecomendadas = recomendadas.reduce((acum, materia) => {
        if (filtros.includes(materia.dep) && !materias.some(m => m.id == materia.id)) {
            acum.push(<Materia materia = {materia} id = {'r' + materia.id} key = {materia.id}/>)
        }
        return acum
    }, []) 
    const botonesDep = departamentos.map(dep =>
        <span className={'btn border' + (filtros.includes(dep) ? ' btn-primary' : '')} key = {dep}>{dep}</span>
    )

    function handleOnClick(dep) {
        if (filtros.includes(dep)) {
            setFiltros(filtros.filter(filtro => filtro != dep)) // linea de codigo favorita
        } else {
            setFiltros([...filtros, dep])
        }
    }
    return(
        <div className= 'd-flex flex-column col-md-2 p-3 vh-100'>
            <h4>Filtrar Recomendadas:</h4>
            <div className='btn-group gap-2'>
                {botonesDep}
            </div>
            <div className='list-group gap-2 mt-3 flex-grow-1 overflow-auto'>
                {renderedRecomendadas.length > 0 ? renderedRecomendadas : <p>No tenes recomendaciones <br></br> ¿Agregaste materias?</p>}
            </div>
        </div>
    )
}