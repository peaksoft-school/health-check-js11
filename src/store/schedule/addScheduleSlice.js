import { createSlice } from '@reduxjs/toolkit'
import { getDoctorsByDepartment, postNewAppoinment } from './addScheduleThunk'

const initialState = {
   doctors: [],
   loading: false,
   error: null,
}

export const addScheduleSlice = createSlice({
   name: 'addOnlineAppointments',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getDoctorsByDepartment.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(getDoctorsByDepartment.fulfilled, (state, { payload }) => {
            state.loading = false
            state.doctors = payload
         })
         .addCase(getDoctorsByDepartment.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(postNewAppoinment.pending, (state) => {
            state.loading = true
         })
         .addCase(postNewAppoinment.fulfilled, (state, { payload }) => {
            state.loading = false
         })
         .addCase(postNewAppoinment.rejected, (state, action) => {
            state.loading = false
         })
   },
})
