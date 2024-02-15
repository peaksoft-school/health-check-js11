import { createSlice } from '@reduxjs/toolkit'
import {
   deleteAppointmentById,
   getAppointments,
   updateAppointmentStatus,
} from '../thunks/appointmentThunk'
import { showToast } from '../../utils/helpers/notification'

const initialState = {
   appointments: [],
   newAppointments: [],
   isLoading: false,
   error: null,
   selectAll: false,
   deletedAppointmentsIds: [],
}

export const appointmentsSlice = createSlice({
   name: 'appointmentsAdmin',
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

         console.log(state.deletedAppointmentsIds)
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

         console.log(state.deletedAppointmentsIds)

         if (
            state.deletedAppointmentsIds.length === state.appointments.length
         ) {
            state.selectAll = true
         } else {
            state.selectAll = false
         }
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(getAppointments.fulfilled, (state, action) => {
            const updatedAppointments = action.payload.map((appointment) => ({
               ...appointment,
               isSelected: false,
            }))

            state.appointments = updatedAppointments
         })

         .addCase(updateAppointmentStatus.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(updateAppointmentStatus.pending, () => {
            showToast({
               message: 'pending',
            })
         })

         .addCase(updateAppointmentStatus.rejected, (state, action) => {
            state.isLoading = false
            showToast({
               message: (state.error = action.error.message),
            })
         })

         .addCase(deleteAppointmentById.fulfilled, () => {
            showToast({
               message: 'Запись успешно удалена',
            })
         })
   },
})

export const APPOINTMENTS_ACTIONS = appointmentsSlice.actions
