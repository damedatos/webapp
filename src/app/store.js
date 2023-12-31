import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import materiasReducer, { agregar, borrar } from '../features/materias/materiasSlice'
import recomendadasReducer, { recomendar } from '../features/recomendar/recomendarSlice'
import authReducer from '../features/auth/authSlice'

const recomendarListener = createListenerMiddleware()
recomendarListener.startListening({
    matcher: isAnyOf(agregar, borrar),
    effect: async (action, {getState, dispatch}) => {
        const state = getState()
        if (state.materias.length > 2) {
            const response = await fetch('/api/materias/recomendar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ materias: state.materias, auth: state.auth })
            })
            if (response.ok) {
                const recomendadas = await response.json()
                dispatch(recomendar(recomendadas))
            }
        } else {
            dispatch(recomendar([]))
        }
    }
})

export const store = configureStore({
    reducer: { materias: materiasReducer, recomendadas: recomendadasReducer, auth: authReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(recomendarListener.middleware)
})