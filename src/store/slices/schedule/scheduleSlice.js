import { createSlice } from '@reduxjs/toolkit'
import { SCHEDULE_THUNK } from './scheduleThunk'

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
         .addCase(SCHEDULE_THUNK.getSchedules.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SCHEDULE_THUNK.getSchedules.fulfilled, (state, action) => {
            state.schedules = action.payload
            state.isLoading = false
         })

         .addCase(SCHEDULE_THUNK.getSchedules.rejected, (state) => {
            state.isLoading = false
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
               const updatedSchedules = action.payload.map((schedule) => ({
                  ...schedule,
               }))

               updatedSchedules.sort((a, b) => a.id - b.id)

               state.schedules = updatedSchedules
            }
            state.isLoading = false
         })
   },
})

export const SCHEDULE_ACTIONS = scheduleSlice.actions
