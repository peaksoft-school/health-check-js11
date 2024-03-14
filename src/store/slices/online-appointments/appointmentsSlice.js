import { createSlice } from '@reduxjs/toolkit'
import { APPOINTMENTS_THUNK } from './appointmentThunk'

const initialState = {
   appointments: [],
   isLoading: false,
   error: null,
   selectAll: false,
   deletedAppointmentsIds: [],
}

const appointmentsSlice = createSlice({
   name: 'appointments',
   initialState,
   reducers: {
      handleIsChecked: (state) => {
         state.selectAll = !state.selectAll

         state.appointments = state.appointments.map((appointment) => ({
            ...appointment,
            isSelected: state.selectAll,
         }))

         state.deletedAppointmentsIds = state.appointments
            .filter((appointment) => appointment.isSelected)
            .map((appointment) => appointment.appointmentId)
      },

      handleIsCheckedItem: (state, { payload }) => {
         state.appointments = state.appointments.map((appointment) => {
            if (appointment.appointmentId === payload.appointmentId) {
               return {
                  ...appointment,
                  isSelected: !appointment.isSelected,
               }
            }
            return appointment
         })

         state.deletedAppointmentsIds = state.appointments
            .filter((appointment) => appointment.isSelected)
            .map((appointment) => appointment.appointmentId)

         if (
            state.deletedAppointmentsIds.length === state.appointments.length
         ) {
            state.selectAll = true
         } else {
            state.selectAll = false
         }
      },
   },

   clearDeletedAppointmentsIds: (state) => {
      state.deletedAppointmentsIds = []
   },

   extraReducers: (builder) => {
      builder
         .addCase(
            APPOINTMENTS_THUNK.getAppointments.fulfilled,
            (state, action) => {
               const updatedAppointments = action.payload.map(
                  (appointment) => ({
                     ...appointment,
                     isSelected: false,
                  })
               )

               state.appointments = updatedAppointments
               state.isLoading = false
            }
         )

         .addCase(APPOINTMENTS_THUNK.getAppointments.pending, (state) => {
            state.isLoading = true
         })

         .addCase(APPOINTMENTS_THUNK.getAppointments.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            APPOINTMENTS_THUNK.searchAppointment.fulfilled,
            (state, action) => {
               if (action.payload && !action.payload.error) {
                  const updatedAppointments = action.payload.map(
                     (appointment) => ({
                        ...appointment,
                        isSelected: false,
                     })
                  )

                  updatedAppointments.sort(
                     (a, b) => a.appointmentId - b.appointmentId
                  )

                  state.appointments = updatedAppointments
               }
               state.isLoading = false
            }
         )

         .addCase(APPOINTMENTS_THUNK.updateAppointment.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(APPOINTMENTS_THUNK.updateAppointment.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            APPOINTMENTS_THUNK.deleteAllAppointments.fulfilled,
            (state) => {
               state.deletedAppointmentsIds = []
            }
         )
   },
})

export const APPOINTMENTS_ACTIONS = appointmentsSlice.actions
export default appointmentsSlice
