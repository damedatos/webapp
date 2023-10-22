import { configureStore } from '@reduxjs/toolkit';
import materiasReducer from '../features/materiasSlice';

export const store = configureStore({ reducer: { materias: materiasReducer } });