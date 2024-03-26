import { createSlice } from '@reduxjs/toolkit'
import { DOCTORS_THUNK } from './doctorThunk'

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
         .addCase(DOCTORS_THUNK.getDoctors.fulfilled, (state, { payload }) => {
            state.doctors = payload
            state.isLoading = false
         })

         .addCase(DOCTORS_THUNK.getDoctors.pending, (state) => {
            state.isLoading = true
         })

         .addCase(DOCTORS_THUNK.getDoctors.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            DOCTORS_THUNK.getDoctorsById.fulfilled,
            (state, { payload }) => {
               state.doctor = payload
               state.isLoading = false
            }
         )

         .addCase(DOCTORS_THUNK.getDoctorsById.pending, (state) => {
            state.isLoading = true
         })

         .addCase(DOCTORS_THUNK.getDoctorsById.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export const DOCTORS_ACTIONS = doctorSlice.actions
