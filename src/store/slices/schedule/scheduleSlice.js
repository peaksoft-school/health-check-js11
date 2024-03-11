import { createSlice } from '@reduxjs/toolkit'
import { SCHEDULE_THUNK } from './scheduleThunk'
import { showToast } from '../../../utils/helpers/notification'

const initialState = {
   doctors: [],
   schedules: [],
   isLoading: false,
   error: null,
}

export const scheduleSlice = createSlice({
   name: 'schedule',
   initialState,

   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(SCHEDULE_THUNK.getAllSchedules.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SCHEDULE_THUNK.getAllSchedules.fulfilled, (state, action) => {
            state.schedules = action.payload
            state.isLoading = false
         })

         .addCase(SCHEDULE_THUNK.getAllSchedules.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(SCHEDULE_THUNK.savePatternTimeSheet.fulfilled, () => {
            showToast({
               message: 'Успешно',
            })
         })

         .addCase(SCHEDULE_THUNK.getDoctorsByDepartment.pending, (state) => {
            state.isLoading = true
            state.error = null
         })

         .addCase(
            SCHEDULE_THUNK.getDoctorsByDepartment.fulfilled,
            (state, { payload }) => {
               state.isLoading = false
               state.doctors = payload
            }
         )

         .addCase(
            SCHEDULE_THUNK.getDoctorsByDepartment.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.error.message
            }
         )

         .addCase(SCHEDULE_THUNK.postNewSchedule.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SCHEDULE_THUNK.postNewSchedule.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(SCHEDULE_THUNK.postNewSchedule.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(SCHEDULE_THUNK.scheduleSearch.fulfilled, (state, action) => {
            if (action.payload && !action.payload.error) {
               const updatedSchedules = action.payload.map((appointment) => ({
                  ...appointment,
                  isSelected: false,
               }))

               updatedSchedules.sort(
                  (a, b) => a.appointmentId - b.appointmentId
               )

               state.schedules = updatedSchedules
            }
            state.isLoading = false
         })

         .addCase(SCHEDULE_THUNK.updateTimeSheetDoctor.fulfilled, () => {
            showToast({
               message: 'Успешно',
            })
         })
   },
})

export const SCHEDULE_ACTIONS = scheduleSlice.actions
