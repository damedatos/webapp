import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import materiasReducer, { agregar } from '../features/materias/materiasSlice'
import recomendadasReducer, { recomendar } from '../features/recomendar/recomendarSlice'

const recomendarListener = createListenerMiddleware()
recomendarListener.startListening({
    actionCreator: agregar,
    effect: async (action, {getState, dispatch}) => {
        const state = getState()
        if (state.materias.length > 3 && state.materias.length % 2 == 0) {
            const response = await fetch('/api/materias/recomendar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ materias: state.materias })
            })
            if (response.ok) {
                const recomendadas = await response.json()
                dispatch(recomendar(recomendadas))
            }
        }
    }
})

export const store = configureStore({
    reducer: { materias: materiasReducer, recomendadas: recomendadasReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(recomendarListener.middleware)
})