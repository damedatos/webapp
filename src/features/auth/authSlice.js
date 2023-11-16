import { createSlice } from '@reduxjs/toolkit'

const initialState = null
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticate: (state, action) => action.payload
    }
})

export const { authenticate } = authSlice.actions

export default authSlice.reducer