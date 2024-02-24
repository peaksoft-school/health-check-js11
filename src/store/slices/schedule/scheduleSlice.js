import { createSlice } from '@reduxjs/toolkit'
import { SCHEDULE_THUNK } from './scheduleThunk'

const initialState = {
   isLoading: false,
   schedules: [],
}

export const scheduleSlice = createSlice({
   name: 'schedule',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder.addCase(SCHEDULE_THUNK.getAllSchedules.pending, (state) => {
         state.isLoading = true
      })

      builder.addCase(
         SCHEDULE_THUNK.getAllSchedules.fulfilled,
         (state, action) => {
            state.schedules = action.payload
            state.isLoading = false
         }
      )

      builder.addCase(SCHEDULE_THUNK.getAllSchedules.rejected, (state) => {
         state.isLoading = false
      })
   },
})
