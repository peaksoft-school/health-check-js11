import { createSlice } from '@reduxjs/toolkit'
import { ONLINE_APPOINTMENTS_THUNKS } from './onlineAppointmentsThunk'

const initialState = {
   doctorsTimesheet: [],
   doctors: {},
   doctorData: {},
   date: [],
   facilityArray: [],
   isLoading: false,
   appointmentId: null,
   code: null,
   isResult: false,
}

export const onlineAppointmentsSlice = createSlice({
   name: 'onlineAppointments',
   initialState,
   reducers: {
      setIsResult: (state) => {
         state.isResult = true
      },
   },

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
               const [id, code] = payload.message.split(' ')
               state.code = code
               state.appointmentId = id
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
         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.checkVerificationCode.fulfilled,
            (state, { payload }) => {
               state.isLoading = false
               state.doctorData = payload
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.checkVerificationCode.pending,
            (state) => {
               state.isLoading = true
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNKS.checkVerificationCode.rejected,
            (state) => {
               state.isLoading = false
            }
         )
   },
})

export const ONLINE_APPOINTMENTS_ACTIONS = onlineAppointmentsSlice.actions
