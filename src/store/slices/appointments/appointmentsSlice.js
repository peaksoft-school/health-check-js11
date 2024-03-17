import { createSlice } from '@reduxjs/toolkit'
import { APPOINTMENTS_THUNKS } from './appointmentsThunk'

const initialState = {
   doctorsTimesheet: [],
   doctors: {},
   doctorData: {},
   date: [],
   facilityArray: [],
   isLoading: false,
   appointmentId: null,
   code: null,
}

export const appointmentsSlice = createSlice({
   name: 'appointments',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            APPOINTMENTS_THUNKS.getDoctorsAvailableTimesheet.fulfilled,
            (state, { payload }) => {
               state.doctorsTimesheet = payload
               state.isLoading = false
            }
         )

         .addCase(
            APPOINTMENTS_THUNKS.getDoctorsAvailableTimesheet.pending,
            (state) => {
               state.isLoading = true
            }
         )

         .addCase(
            APPOINTMENTS_THUNKS.getDoctorsAvailableTimesheet.rejected,
            (state) => {
               state.isLoading = false
            }
         )

         .addCase(
            APPOINTMENTS_THUNKS.getAllFacility.fulfilled,
            (state, { payload }) => {
               state.facilityArray = payload
               state.isLoading = false
            }
         )

         .addCase(APPOINTMENTS_THUNKS.getAllFacility.pending, (state) => {
            state.isLoading = true
         })

         .addCase(APPOINTMENTS_THUNKS.getAllFacility.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            APPOINTMENTS_THUNKS.getDoctorSchedule.fulfilled,
            (state, { payload }) => {
               state.date = payload
               state.isLoading = false
            }
         )

         .addCase(APPOINTMENTS_THUNKS.getDoctorSchedule.pending, (state) => {
            state.isLoading = true
         })

         .addCase(APPOINTMENTS_THUNKS.getDoctorSchedule.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            APPOINTMENTS_THUNKS.addAppointment.fulfilled,
            (state, { payload }) => {
               state.isLoading = false
               const [id, code] = payload.message.split(' ')
               state.code = code
               state.appointmentId = id
            }
         )

         .addCase(APPOINTMENTS_THUNKS.addAppointment.pending, (state) => {
            state.isLoading = true
         })

         .addCase(APPOINTMENTS_THUNKS.addAppointment.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            APPOINTMENTS_THUNKS.checkVerificationCode.fulfilled,
            (state, { payload }) => {
               state.isLoading = false
               state.doctorData = payload
               state.code = null
            }
         )

         .addCase(
            APPOINTMENTS_THUNKS.checkVerificationCode.pending,
            (state) => {
               state.isLoading = true
            }
         )

         .addCase(
            APPOINTMENTS_THUNKS.checkVerificationCode.rejected,
            (state) => {
               state.isLoading = false
            }
         )
   },
})

export const APPOINTMENTS_ACTIONS = appointmentsSlice.actions
