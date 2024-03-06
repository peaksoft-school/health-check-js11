import { createSlice } from '@reduxjs/toolkit'
import { SPECIALISTS_THUNK } from './specialictsThunk'
import { showToast } from '../../../utils/helpers/notification'

const initialState = {
   specialists: [],
   isLoading: false,
   error: null,
}

const specialistsSlice = createSlice({
   name: 'Specialists',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            SPECIALISTS_THUNK.getSpecialists.fulfilled,
            (state, action) => {
               const updateSpecialists = action.payload.map((specialist) => ({
                  ...specialist,
                  isSelected: false,
               }))
               state.specialists = updateSpecialists
               state.isLoading = false
            }
         )

         .addCase(SPECIALISTS_THUNK.getSpecialists.pending, (state) => {
            state.isLoading = true
         })
         .addCase(
            SPECIALISTS_THUNK.getSpecialists.rejected,
            (state, action) => {
               state.isLoading = false

               showToast({
                  message: (state.error = action.error.message),
                  status: 'rejected',
               })
            }
         )
   },
})
export const SPECIALIST_ACTIONS = specialistsSlice.actions

export default specialistsSlice
