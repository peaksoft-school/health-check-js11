import { createSlice } from '@reduxjs/toolkit'
import { PATIENT_THUNKS } from './patientThunk'

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

         .addCase(PATIENT_THUNKS.getPatient.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.data = payload
         })
         .addCase(PATIENT_THUNKS.getPatient.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PATIENT_THUNKS.getPatient.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            PATIENT_THUNKS.getPatientResult.fulfilled,
            (state, { payload }) => {
               state.isLoading = false
               state.results = payload
            }
         )

         .addCase(PATIENT_THUNKS.getPatientResult.pending, (state) => {
            state.isLoading = true
         })

         .addCase(PATIENT_THUNKS.getPatientResult.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(PATIENT_THUNKS.addPatientResult.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(PATIENT_THUNKS.addPatientResult.pending, (state) => {
            state.isLoading = true
         })

         .addCase(PATIENT_THUNKS.addPatientResult.rejected, (state) => {
            state.isLoading = false
         })
   },
})
