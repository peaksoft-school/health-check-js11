import { createSlice } from '@reduxjs/toolkit'
import { SPECIALISTS_THUNK } from './specialictsThunk'

const initialState = {
   specialists: [],
   isLoading: false,
   error: null,
}

export const specialistsSlice = createSlice({
   name: 'specialists',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            SPECIALISTS_THUNK.getSpecialists.fulfilled,
            (state, { payload }) => {
               state.specialists = payload
               state.isLoading = false
            }
         )

         .addCase(SPECIALISTS_THUNK.getSpecialists.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SPECIALISTS_THUNK.getSpecialists.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export const SPECIALIST_ACTIONS = specialistsSlice.actions
