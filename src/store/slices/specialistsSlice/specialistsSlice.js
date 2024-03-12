import { createSlice } from '@reduxjs/toolkit'
import { SPECIALISTS_THUNK } from './specialictsThunk'

const initialState = {
   specialists: [],
   specialist: {},
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

         .addCase(SPECIALISTS_THUNK.updateDoctorStatus.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(SPECIALISTS_THUNK.updateDoctorStatus.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SPECIALISTS_THUNK.updateDoctorStatus.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(
            SPECIALISTS_THUNK.getSpecialistById.fulfilled,
            (state, { payload }) => {
               state.specialist = payload
               state.isLoading = false
            }
         )
         .addCase(SPECIALISTS_THUNK.getSpecialistById.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SPECIALISTS_THUNK.getSpecialistById.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            SPECIALISTS_THUNK.serachSpecilaist.fulfilled,
            (state, action) => {
               if (action.payload && !action.payload.error) {
                  const updateSpecialist = action.payload.map((specialist) => ({
                     ...specialist,
                     isSelected: false,
                  }))

                  updateSpecialist.sort((a, b) => a.id - b.id)

                  state.specialist = updateSpecialist
               }

               state.status = 'succeeded'
               state.searchItems = action.payload
            }
         )
         .addCase(
            SPECIALISTS_THUNK.serachSpecilaist.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )
         .addCase(SPECIALISTS_THUNK.getDepartment.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(
            SPECIALISTS_THUNK.getDepartment.fulfilled,
            (state, action) => {
               state.isLoading = false
               state.data = action.payload
            }
         )
         .addCase(SPECIALISTS_THUNK.getDepartment.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })
   },
})

export const SPECIALIST_ACTIONS = specialistsSlice.actions
