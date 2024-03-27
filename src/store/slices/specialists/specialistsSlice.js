import { createSlice } from '@reduxjs/toolkit'
import { SPECIALISTS_THUNKS } from './specialictsThunk'

const initialState = {
   specialists: [],
   specialist: {},
   isLoading: false,
}

const specialistsSlice = createSlice({
   name: 'specialists',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(
            SPECIALISTS_THUNKS.getSpecialists.fulfilled,
            (state, { payload }) => {
               state.specialists = payload
               state.isLoading = false
            }
         )

         .addCase(SPECIALISTS_THUNKS.getSpecialists.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SPECIALISTS_THUNKS.getSpecialists.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(SPECIALISTS_THUNKS.updateDoctorStatus.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(SPECIALISTS_THUNKS.updateDoctorStatus.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(SPECIALISTS_THUNKS.updateDoctorStatus.pending, (state) => {
            state.isLoading = true
         })

         .addCase(
            SPECIALISTS_THUNKS.getSpecialist.fulfilled,
            (state, { payload }) => {
               state.specialist = payload
               state.isLoading = false
            }
         )

         .addCase(SPECIALISTS_THUNKS.getSpecialist.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SPECIALISTS_THUNKS.getSpecialist.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(SPECIALISTS_THUNKS.addSpecialist.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(SPECIALISTS_THUNKS.addSpecialist.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SPECIALISTS_THUNKS.addSpecialist.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(SPECIALISTS_THUNKS.updateSpecialist.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(SPECIALISTS_THUNKS.updateSpecialist.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SPECIALISTS_THUNKS.updateSpecialist.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(SPECIALISTS_THUNKS.deleteSpecialist.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(SPECIALISTS_THUNKS.deleteSpecialist.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SPECIALISTS_THUNKS.deleteSpecialist.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            SPECIALISTS_THUNKS.searchSpecialist.fulfilled,
            (state, { payload }) => {
               state.specialists = payload
               state.isLoading = false
            }
         )

         .addCase(SPECIALISTS_THUNKS.searchSpecialist.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SPECIALISTS_THUNKS.searchSpecialist.rejected, (state) => {
            state.isLoading = false
         })
   },
})

const SPECIALISTS_ACTIONS = specialistsSlice.actions

export { specialistsSlice, SPECIALISTS_ACTIONS }
