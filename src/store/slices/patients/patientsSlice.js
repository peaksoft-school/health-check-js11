import { createSlice } from '@reduxjs/toolkit'
import { PATIENTS_THUNK } from './patientsThunk'

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
      builder.addCase(PATIENTS_THUNK.getPatients.fulfilled, (state, action) => {
         return {
            ...state,
            patients: action.payload,
            isLoading: false,
            error: null,
         }
      })
   },
})

export const { PATIENTS_SLICE } = patientsSlice.actions
export default patientsSlice
