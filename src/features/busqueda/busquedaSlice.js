import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const recomendadasSlice = createSlice({
    name: 'recomendadas',
    initialState,
    reducers: {
        recomendar: (state, action) => action.payload
    },
})

export const { recomendar } = recomendadasSlice.actions

export default recomendadasSlice.reducer