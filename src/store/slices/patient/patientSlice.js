import { createSlice } from '@reduxjs/toolkit'
import { PATIENT_THUNK } from './patientThunk'

const initialState = {
   data: {},
   results: [],
   isLoading: false,
}

export const patientSlice = createSlice({
   name: 'patient',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder

         .addCase(PATIENT_THUNK.getPatient.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.data = payload
         })
         .addCase(PATIENT_THUNK.getPatient.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PATIENT_THUNK.getPatient.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            PATIENT_THUNK.getPatientResult.fulfilled,
            (state, { payload }) => {
               state.isLoading = false
               state.results = payload
            }
         )

         .addCase(PATIENT_THUNK.getPatientResult.pending, (state) => {
            state.isLoading = true
         })

         .addCase(PATIENT_THUNK.getPatientResult.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(PATIENT_THUNK.postPatientResult.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(PATIENT_THUNK.postPatientResult.pending, (state) => {
            state.isLoading = true
         })

         .addCase(PATIENT_THUNK.postPatientResult.rejected, (state) => {
            state.isLoading = false
         })
   },
})
