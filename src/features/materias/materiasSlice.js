import { createSlice } from '@reduxjs/toolkit' 

const initialState = []
export const materiasSlice = createSlice({
    name: 'materias',
    initialState,
    reducers: {
        agregar: (state, action) => [...state.filter(materia => materia._id != action.payload._id), action.payload],
        borrar: (state, action) => state.filter(materia => materia._id != action.payload._id),
        mover: (state, action) => state.map(materia => {
            if (materia._id != action.payload._id) return materia
            else return { ...materia, cuatri: action.payload.cuatri }
        }),
    }
})

export const { agregar, borrar, mover } = materiasSlice.actions

export default materiasSlice.reducer