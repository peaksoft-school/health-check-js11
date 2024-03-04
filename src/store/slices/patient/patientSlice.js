import { createSlice } from '@reduxjs/toolkit'
import { getPatient, getPatientResult, postPatientResult } from './patientThunk'
import { showToast } from '../../../utils/helpers/notification'

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

         .addCase(getPatient.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.data = payload
         })
         .addCase(getPatient.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getPatient.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(getPatientResult.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.results = payload
         })

         .addCase(getPatientResult.pending, (state) => {
            state.isLoading = true
         })

         .addCase(getPatientResult.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(postPatientResult.fulfilled, (state, { payload }) => {
            state.isLoading = false
         })

         .addCase(postPatientResult.pending, (state) => {
            state.isLoading = true
         })

         .addCase(postPatientResult.rejected, (state) => {
            state.isLoading = false
         })
   },
})
