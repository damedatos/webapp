import { createSlice } from '@reduxjs/toolkit'

const initialState = {materias: [], visible: true}

export const recomendadasSlice = createSlice({
    name: 'recomendadas',
    initialState,
    reducers: {
        recomendar: (state, action) => {
            return {
                materias: action.payload.map(materia => {return {...materia, recomendada: true}}),
                visible: state.visible
            }},
        visible: (state, action) => {return {materias: state.materias, visible: !state.visible}}
    },
})

export const { recomendar, visible } = recomendadasSlice.actions

export default recomendadasSlice.reducer