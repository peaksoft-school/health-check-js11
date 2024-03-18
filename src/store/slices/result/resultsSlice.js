import { createSlice } from '@reduxjs/toolkit'
import { RESULTS_THUNKS } from './resultsThunk'

const initialState = {
   isLoading: false,
}

export const resultSlice = createSlice({
   name: 'result',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder.addCase(
         RESULTS_THUNKS.getResults.fulfilled((state) => {
            state.isLoading = true
         })
      )
   },
})
