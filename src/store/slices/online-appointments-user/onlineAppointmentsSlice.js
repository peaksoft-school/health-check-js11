import { createSlice } from '@reduxjs/toolkit'
import { ONLINE_APPOINTMENTS_THUNKS } from './onlineAppointmentsThunk'

const initialState = {
   doctorsTimesheet: [],
   doctors: {},
   date: [],
   facilityArray: [],
   isLoading: false,
   appoinmentId: null,
   code: null,
}

export const onlineAppointmentsSlice = createSlice({
   name: 'onlineAppointments',
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
            ONLINE_APPOINTMENTS_THUNKS.getAllFacility.fulfilled,
            (state, { payload }) => {
               state.facilityArray = payload
               state.isLoading = false
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.getAllFacility.pending,
            (state) => {
               state.isLoading = true
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.getAllFacility.rejected,
            (state) => {
               state.isLoading = false
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorSchedule.fulfilled,
            (state, { payload }) => {
               state.date = payload
               state.isLoading = false
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorSchedule.pending,
            (state) => {
               state.isLoading = true
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorSchedule.rejected,
            (state) => {
               state.isLoading = false
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.addAppointment.fulfilled,
            (state, { payload }) => {
               state.isLoading = false
               const [code, id] = payload.message.split(' ')
               state.code = code
               state.appoinmentId = id
               console.log(payload.message)
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.addAppointment.pending,
            (state) => {
               state.isLoading = true
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.addAppointment.rejected,
            (state) => {
               state.isLoading = false
            }
         )
   },
})
