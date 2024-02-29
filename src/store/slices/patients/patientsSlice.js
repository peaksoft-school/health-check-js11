import { createSlice } from '@reduxjs/toolkit'
import { getAllPatients, searchPatients } from './patientsThunk'

const initialState = {
   patients: [],
   data: {},
   isLoading: false,
   fileUrl: '',
}

export const patientsSlice = createSlice({
   name: 'patients',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(getAllPatients.fulfilled, (state, { payload }) => {
            state.patients = payload
            state.isLoading = false
         })
         .addCase(getAllPatients.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAllPatients.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(searchPatients.fulfilled, (state, { payload }) => {
            if (payload && !payload.error) {
               const searchPatient = payload.map((patient) => ({
                  ...patient,
               }))

               searchPatient.sort((a, b) => a.id - b.id)

               state.patients = searchPatient
            }
            state.isLoading = false
         })
   },
})
