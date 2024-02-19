import { createSlice } from '@reduxjs/toolkit'
import {
   deleteAllAppointments,
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
      // localStorage.removeItem('deletedAppointmentsIds')
   },

   extraReducers: (builder) => {
      builder
         .addCase(getAppointments.fulfilled, (state, action) => {
            const updatedAppointments = action.payload.map((appointment) => ({
               ...appointment,
               isSelected: false,
            }))

            state.appointments = updatedAppointments
            state.isLoading = false
         })

         .addCase(getAppointments.pending, (state) => {
            state.isLoading = true
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

         .addCase(deleteAllAppointments.fulfilled, () => {
            showToast({
               message: 'Выбранные записи успешно удалены',
            })
         })
   },
})

export const APPOINTMENTS_ACTIONS = appointmentsSlice.actions
