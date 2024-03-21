import { createSlice } from '@reduxjs/toolkit'
import { DOCTOR_THUNK } from './doctorThunk'

const initialState = {
   doctors: [],
   isLoading: false,
   doctor: {},
   error: null,
}

export const doctorSlice = createSlice({
   name: 'doctors',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(DOCTOR_THUNK.getDoctors.fulfilled, (state, { payload }) => {
            state.doctors = payload
            state.isLoading = false
         })

         .addCase(DOCTOR_THUNK.getDoctors.pending, (state) => {
            state.isLoading = true
         })

         .addCase(DOCTOR_THUNK.getDoctors.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            DOCTOR_THUNK.getDoctorsById.fulfilled,
            (state, { payload }) => {
               state.doctor = payload
               state.isLoading = false
            }
         )

         .addCase(DOCTOR_THUNK.getDoctorsById.pending, (state) => {
            state.isLoading = true
         })

         .addCase(DOCTOR_THUNK.getDoctorsById.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export const DOCTORS_ACTIONS = doctorSlice.actions
