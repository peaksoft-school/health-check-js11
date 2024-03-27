import { createSlice } from '@reduxjs/toolkit'
import { APPLICATIONS_THUNKS } from './applicationsThunk'
import { showToast } from '../../../utils/helpers/notification'

export const applicationsSlice = createSlice({
   name: 'applications',
   initialState: {
      applications: [],
      isLoading: false,
      selectAllApp: false,
      error: null,
      selectAllApplications: [],
   },

   reducers: {
      handleIsChecked: (state) => {
         state.selectAllApp = !state.selectAllApp

         state.applications = state.applications?.map((application) => ({
            ...application,
            isSelected: application.processed
               ? state.selectAllApp
               : application.isSelected,
         }))

         state.selectAllApplications = state.applications
            .filter((application) => application.isSelected)
            .map((application) => application.id)
      },

      handleIsCheckedItem: (state, { payload }) => {
         state.applications = state.applications?.map((application) => {
            if (application.id === payload.id) {
               return {
                  ...application,
                  isSelected: application.processed
                     ? !application.isSelected
                     : application.isSelected,
               }
            }
            return application
         })

         state.selectAllApplications = state.applications
            .filter(
               (application) => application.isSelected && application.processed
            )
            .map((application) => application.id)

         if (
            state.selectAllApplications.length ===
            state.applications.filter((application) => application.processed)
               .length
         ) {
            state.selectAllApp = true
         } else {
            state.selectAllApp = false
         }
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(APPLICATIONS_THUNKS.getApplicationData.pending, (state) => {
            state.isLoading = true
         })

         .addCase(
            APPLICATIONS_THUNKS.getApplicationData.fulfilled,
            (state, action) => {
               const updatedApplications = action.payload.map(
                  (application) => ({
                     ...application,
                     isSelected: false,
                  })
               )
               state.applications = updatedApplications
               state.isLoading = false
            }
         )

         .addCase(
            APPLICATIONS_THUNKS.getApplicationData.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.error.message
            }
         )

         .addCase(APPLICATIONS_THUNKS.deleteApplication.pending, (state) => {
            state.isLoading = true
         })

         .addCase(APPLICATIONS_THUNKS.deleteApplication.fulfilled, (state) => {
            state.isLoading = false
            showToast({
               message: 'Запись удалена',
            })
         })

         .addCase(
            APPLICATIONS_THUNKS.deleteApplication.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.error.message
            }
         )

         .addCase(APPLICATIONS_THUNKS.updateApplication.pending, (state) => {
            state.isLoading = true
         })

         .addCase(
            APPLICATIONS_THUNKS.updateApplication.fulfilled,
            (state, { payload }) => {
               state.selectAllApplications = state.selectAllApplications.filter(
                  (id) => id !== payload.id
               )

               state.isLoading = false
            }
         )

         .addCase(
            APPLICATIONS_THUNKS.updateApplication.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.error.message
            }
         )

         .addCase(APPLICATIONS_THUNKS.searchApplications.pending, (state) => {
            state.isLoading = true
         })

         .addCase(
            APPLICATIONS_THUNKS.searchApplications.fulfilled,
            (state, action) => {
               if (action.payload && !action.payload.error) {
                  const updatedApplications = action.payload.map(
                     (application) => ({
                        ...application,
                        isSelected: false,
                     })
                  )

                  updatedApplications.sort((a, b) => a.id - b.id)

                  state.applications = updatedApplications
               }

               state.isLoading = false
            }
         )

         .addCase(
            APPLICATIONS_THUNKS.searchApplications.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.error.message
            }
         )

         .addCase(
            APPLICATIONS_THUNKS.deleteAllApplication.fulfilled,
            (state) => {
               state.selectAllApplications = []
               state.isLoading = false
               showToast({
                  message: 'Успешно удалено ',
               })
            }
         )
   },
})

export const { handleIsCheckedItem, handleIsChecked, handleRemoveChecked } =
   applicationsSlice.actions
