import { createSlice } from '@reduxjs/toolkit'
import { getDoctorsByDepartment, postNewSchedule } from './scheduleThunk'

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
         .addCase(postNewSchedule.pending, (state) => {
            state.loading = true
         })
         .addCase(postNewSchedule.fulfilled, (state, { payload }) => {
            state.loading = false
            // state.doctors = payload
         })
         .addCase(postNewSchedule.rejected, (state, action) => {
            state.loading = false
         })
   },
})
