import { configureStore } from '@reduxjs/toolkit';
import materiasReducer from '../features/materias/materiasSlice'

export const store = configureStore({ reducer: { materias: materiasReducer } });