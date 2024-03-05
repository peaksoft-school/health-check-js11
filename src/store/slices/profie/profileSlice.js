import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isLoading: false,
   userData: {},
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},

   extraReducers: (builder) => {},
})

export const { logOut } = authSlice.actions
