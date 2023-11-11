import React from 'react'
import { useSelector } from 'react-redux'
import { Materia } from '../materias/materias'

export function Recomendar() {
    const recomendadas = useSelector(state => state.recomendadas.materias)
    const renderedRecomendadas = recomendadas.map(materia => <Materia materia = {materia} id = {'r' + materia.id} key = {materia.id}/>) 
    return(
        <div className= 'd-flex flex-column col-md-4 h-100'>
            <div className='list-group gap-2 overflow-y-scroll overflow-x-hidden'>
                {renderedRecomendadas}
            </div>
        </div>
    )
}