import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 2, nombre: 'Aprendizaje Automático', cht: 64}
]

export const materiasSlice = createSlice({
    name: 'materias',
    initialState,
    reducers: {
        agregar: (state, action) => [...state, action.payload],
        borrar: (state, action) => state.filter(materia => materia.id != action.payload.id),
        mover: (state, action) => state.map(materia => {
            if (materia.id != action.payload.id) return materia
            else return { ...materia, cuatri: action.payload.cuatri }
        })
    }
})

export const { agregar, borrar } = materiasSlice.actions

export default materiasSlice.reducer