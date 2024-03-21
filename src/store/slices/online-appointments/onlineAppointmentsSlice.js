import { createSlice } from '@reduxjs/toolkit'
import { ONLINE_APPOINTMENTS_THUNK } from './onlineAppointmentThunk'

const initialState = {
   appointments: [],
   isLoading: false,
   error: null,
   selectAll: false,
   deletedAppointmentsIds: [],
}

export const onlineAppointmentsSlice = createSlice({
   name: 'onlineAppointments',
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
            if (appointment.appointmentId === payload.id) {
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
            ONLINE_APPOINTMENTS_THUNK.getAppointments.fulfilled,
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

         .addCase(
            ONLINE_APPOINTMENTS_THUNK.getAppointments.pending,
            (state) => {
               state.isLoading = true
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNK.getAppointments.rejected,
            (state) => {
               state.isLoading = false
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNK.searchAppointment.fulfilled,
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

         .addCase(
            ONLINE_APPOINTMENTS_THUNK.updateAppointment.fulfilled,
            (state) => {
               state.isLoading = false
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNK.updateAppointment.rejected,
            (state) => {
               state.isLoading = false
            }
         )

         .addCase(
            ONLINE_APPOINTMENTS_THUNK.deleteAllAppointments.fulfilled,
            (state) => {
               state.deletedAppointmentsIds = []
            }
         )
   },
})

export const ONLINE_APPOINTMENTS_ACTIONS = onlineAppointmentsSlice.actions
