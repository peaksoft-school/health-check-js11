import { createSlice } from '@reduxjs/toolkit'
import { SPECIALISTS_THUNK } from './specialictsThunk'

const initialState = {
   getDoctorsByDepartment: [],
   specialists: [],
   specialist: {},
   isLoading: false,
   error: null,
   searchItems: [],
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

         .addCase(
            SPECIALISTS_THUNK.getDoctorsByDepartment.fulfilled,
            (state, { payload }) => {
               state.getDoctorsByDepartment = payload
            }
         )

         .addCase(SPECIALISTS_THUNK.getDoctorsByDepartment.pending, (state) => {
            state.isLoading = true
            state.error = null
         })

         .addCase(
            SPECIALISTS_THUNK.getDoctorsByDepartment.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.payload
            }
         )

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

         .addCase(SPECIALISTS_THUNK.searchSpecilaist.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(
            SPECIALISTS_THUNK.searchSpecilaist.fulfilled,
            (state, action) => {
               if (action.payload && !action.payload.error) {
                  const updateSpecilaist = action.payload.map((specialist) => ({
                     ...specialist,
                     isSelected: false,
                  }))

                  updateSpecilaist.sort((a, b) => a.id - b.id)

                  state.specialists = updateSpecilaist
               }

               state.status = 'succeeded'
               state.searchItems = action.payload
            }
         )

         .addCase(
            SPECIALISTS_THUNK.searchSpecilaist.rejected,
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

         .addCase(SPECIALISTS_THUNK.updateButton.pending, (state) => {
            state.isLoading = true
         })

         .addCase(SPECIALISTS_THUNK.updateButton.fulfilled, (state, action) => {
            state.isLoading = false
            state.successMessage = 'Доктор успешно обновлен'
            state.updatedFirstName = action.payload.firstName
         })

         .addCase(SPECIALISTS_THUNK.updateButton.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
         })
   },
})
