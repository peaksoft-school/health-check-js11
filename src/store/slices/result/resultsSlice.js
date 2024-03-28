import { createSlice } from '@reduxjs/toolkit'
import { RESULTS_THUNKS } from './resultsThunk'

const initialState = {
   isLoading: false,
   result: '',
}

export const resultSlice = createSlice({
   name: 'result',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(RESULTS_THUNKS.getResults.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.result = payload
         })

         .addCase(RESULTS_THUNKS.getResults.pending, (state) => {
            state.isLoading = true
         })

         .addCase(RESULTS_THUNKS.getResults.rejected, (state) => {
            state.isLoading = true
         })
   },
})
