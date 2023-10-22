import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 2, nombre: 'Aprendizaje Automático', cht: 64 }
]

export const materiasSlice = createSlice({
    name: 'materias',
    initialState,
    reducers: {
        agregar: (state, action) => state.push(action.payload),
        borrar: (state, action) => state.filter(materia => materia != action.payload)
    }
})

export const { agregar, borrar } = materiasSlice.actions

export default materiasSlice.reducer