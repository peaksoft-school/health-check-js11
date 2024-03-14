import { createSlice } from '@reduxjs/toolkit'
import { ONLINE_APPOINTMENTS_THUNKS } from './onlineAppointmentsThunk'

const initialState = {
   doctorsTimesheet: {},
   doctors: {},
   isLoading: false,
}

export const appointmentsSlice = createSlice({
   name: 'online-appointments',
   initialState,
   reducers: {},

   clearDeletedAppointmentsIds: (state) => {
      state.deletedAppointmentsIds = []
      localStorage.removeItem('deletedAppointmentsIds')
   },

   extraReducers: (builder) => {
      builder
         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorsAvailableTimesheet.fulfilled,
            (state, { payload }) => {
               state.doctorsTimesheet = payload
               state.isLoading = false
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorsAvailableTimesheet.pending,
            (state) => {
               state.isLoading = true
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorsAvailableTimesheet.rejected,
            (state) => {
               state.isLoading = false
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorsByFacility.fulfilled,
            (state, { payload }) => {
               state.doctors = payload
               state.isLoading = false
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorsByFacility.pending,
            (state) => {
               state.isLoading = true
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorsByFacility.rejected,
            (state) => {
               state.isLoading = false
            }
         )
   },
})

export const APPOINTMENTS_ACTIONS = appointmentsSlice.actions
