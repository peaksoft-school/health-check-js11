import { createSlice } from '@reduxjs/toolkit'
import { ACTION_PROFILE } from './profileThunk'

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
            ACTION_PROFILE.getUserProfile.fulfilled,
            (state, { payload }) => {
               state.userData = payload
            }
         )
         .addCase(ACTION_PROFILE.getUserProfile.pending, (state) => {
            state.isLoading = true
         })

         .addCase(ACTION_PROFILE.getUserProfile.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            ACTION_PROFILE.updateUserProfile.fulfilled,
            (state, { payload }) => {
               state.userData = payload
            }
         )

         .addCase(ACTION_PROFILE.updateUserProfile.pending, (state) => {
            state.isLoading = true
         })

         .addCase(ACTION_PROFILE.updateUserProfile.rejected, (state) => {
            state.isLoading = false
         })
   },
})
