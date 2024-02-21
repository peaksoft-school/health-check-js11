import { createSlice } from '@reduxjs/toolkit'
import { getAllDoctors } from './scheduleThunk'

const initialState = {
   doctors: [],
   loading: false,
   error: null,
}

export const scheduleSlice = createSlice({
   name: 'schedule',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllDoctors.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(getAllDoctors.fulfilled, (state, { payload }) => {
            state.loading = false
            state.doctors = payload
         })
         .addCase(getAllDoctors.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})
