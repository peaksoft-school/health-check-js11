import { createSlice } from '@reduxjs/toolkit'
import { PATIENTS_THUNKS } from './patientsThunk'

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
         .addCase(
            PATIENTS_THUNKS.getPatients.fulfilled,
            (state, { payload }) => {
               state.patients = payload
               state.isLoading = false
            }
         )
         .addCase(PATIENTS_THUNKS.getPatients.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PATIENTS_THUNKS.getPatients.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            PATIENTS_THUNKS.searchPatients.fulfilled,
            (state, { payload }) => {
               if (payload && !payload.error) {
                  const searchPatient = payload.map((patient) => ({
                     ...patient,
                  }))

                  searchPatient.sort((a, b) => a.id - b.id)

                  state.patients = searchPatient
               }
               state.isLoading = false
            }
         )
   },
})
