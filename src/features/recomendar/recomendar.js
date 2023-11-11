import React from 'react'
import { useSelector } from 'react-redux'
import { Materia } from '../materias/materias'

export function Recomendar() {
    const recomendadas = useSelector(state => state.recomendadas.materias)
    const renderedRecomendadas = recomendadas.map(materia => <Materia materia = {materia} id = {'r' + materia.id} key = {materia.id}/>) 
    return(
        <div className= 'd-flex flex-column col h-100 p-3'>
            <h4>Filtrar Recomendadas:</h4>
            <div className='btn-group gap-2'>
                <span className='btn border'>DC</span>
                <span className='btn border'>DM</span>
                <span className='btn border'>DF</span>
                <span className='btn border'>IC</span>
            </div>
            <div className='list-group gap-2 overflow-y-scroll overflow-x-hidden mt-3'>
                {renderedRecomendadas}
            </div>
        </div>
    )
}