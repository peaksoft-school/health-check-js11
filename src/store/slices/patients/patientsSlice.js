import { createSlice } from '@reduxjs/toolkit'
import { PATIENTS_THUNK } from './patientsThunk'
import { showToast } from '../../../utils/helpers/notification'

const initialState = {
   patients: [],
   isLoading: false,
   error: null,
}

const patientsSlice = createSlice({
   name: 'Patients',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(PATIENTS_THUNK.getPatients.fulfilled, (state, action) => {
            const updatePatients = action.payload.map((patient) => ({
               ...patient,
               isSelected: false,
            }))

            state.patients = updatePatients
            state.isLoading = false
         })
         .addCase(PATIENTS_THUNK.getPatients.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PATIENTS_THUNK.getPatients.rejected, (state, action) => {
            state.isLoading = false

            showToast({
               message: (state.error = action.error.message),
               status: 'rejected',
            })
         })
         .addCase(PATIENTS_THUNK.deletePatients.fulfilled, () => {
            showToast({
               message: 'Запись успешно удалено',
            })
         })
   },
})

export const { PATIENTS_SLICE } = patientsSlice.actions
export default patientsSlice
