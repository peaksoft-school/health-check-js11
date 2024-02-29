import { createSlice } from '@reduxjs/toolkit'
import { getPatient } from './patientThunk'

const initialState = {
   data: {},
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
   },
})
