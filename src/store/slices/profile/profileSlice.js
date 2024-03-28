import { createSlice } from '@reduxjs/toolkit'
import { PROFILE_THUNKS } from './profileThunk'

const initialState = {
   isLoading: false,
   userData: {},
}

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            PROFILE_THUNKS.getUserProfile.fulfilled,
            (state, { payload }) => {
               state.userData = payload
               state.isLoading = false
            }
         )
         .addCase(PROFILE_THUNKS.getUserProfile.pending, (state) => {
            state.isLoading = true
         })

         .addCase(PROFILE_THUNKS.getUserProfile.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            PROFILE_THUNKS.updateUserProfile.fulfilled,
            (state, { payload }) => {
               state.userData = payload
               state.isLoading = false
            }
         )

         .addCase(PROFILE_THUNKS.updateUserProfile.pending, (state) => {
            state.isLoading = true
         })

         .addCase(PROFILE_THUNKS.updateUserProfile.rejected, (state) => {
            state.isLoading = false
         })
   },
})
