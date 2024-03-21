import { createSlice } from '@reduxjs/toolkit'
import { APPLICATION_THUNK } from './applicationThunk'
import { showToast } from '../../../utils/helpers/notification'

export const applicationSlice = createSlice({
   name: 'applications',
   initialState: {
      items: [],
      searchItems: [],
      status: 'idle',
      error: null,
      selectAllApplications: [],
      isSelectAllApplications: false,
      doctors: [],
   },

   reducers: {
      handleIsChecked: (state, action) => {
         state.isSelectAllApplications = !state.isSelectAllApplications

         state.items = state.items.map((item) => ({
            ...item,
            isSelected: state.isSelectAllApplications,
         }))

         state.selectAllApplications = state.items
            .filter((item) => item.isSelected)
            .map((item) => item.id)
      },

      handleIsCheckedItem: (state, { payload }) => {
         state.items = state.items.map((item) => {
            if (item.id === payload.id) {
               return {
                  ...item,
                  isSelected: !item.isSelected,
               }
            }
            return item
         })

         state.selectAllApplications = state.items
            .filter((item) => item.isSelected)
            .map((item) => item.id)

         if (state.selectAllApplications.length === state.items.length) {
            state.selectAllApp = true
         } else {
            state.selectAllApp = false
         }

         localStorage.setItem(
            'selectAllApplications',
            JSON.stringify(state.selectAllApplications)
         )
      },

      handleRemoveChecked: (state) => {
         state.selectAllApplications = []
         localStorage.removeItem('selectAllApplications')
      },
   },

   extraReducers: (builder) => {
      builder

         .addCase(APPLICATION_THUNK.getApplicationData.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(
            APPLICATION_THUNK.getApplicationData.fulfilled,
            (state, action) => {
               state.status = 'succeeded'
               state.items = action.payload
            }
         )

         .addCase(
            APPLICATION_THUNK.getApplicationData.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )

         .addCase(APPLICATION_THUNK.deleteApplication.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(APPLICATION_THUNK.deleteApplication.fulfilled, () => {
            showToast({
               message: 'запись удалена',
            })
         })

         .addCase(
            APPLICATION_THUNK.deleteApplication.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )

         .addCase(APPLICATION_THUNK.updateApplication.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(APPLICATION_THUNK.updateApplication.fulfilled, (state) => {
            state.error = false
         })

         .addCase(
            APPLICATION_THUNK.updateApplication.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )

         .addCase(APPLICATION_THUNK.searchApplications.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(
            APPLICATION_THUNK.searchApplications.fulfilled,
            (state, action) => {
               if (action.payload && !action.payload.error) {
                  const updatedApplications = action.payload.map(
                     (application) => ({
                        ...application,
                        isSelected: false,
                     })
                  )

                  updatedApplications.sort((a, b) => a.id - b.id)

                  state.items = updatedApplications
               }

               state.status = 'succeeded'
               state.searchItems = action.payload
            }
         )

         .addCase(
            APPLICATION_THUNK.searchApplications.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )

         .addCase(APPLICATION_THUNK.deleteAllApplication.fulfilled, () => {
            showToast({
               message: 'Успешно удалено ',
            })
         })

         .addCase(APPLICATION_THUNK.getDoctorsByDepartment.pending, (state) => {
            state.loading = true
            state.error = null
         })

         .addCase(
            APPLICATION_THUNK.getDoctorsByDepartment.fulfilled,
            (state, action) => {
               state.loading = false
               state.doctors = action.payload
            }
         )

         .addCase(
            APPLICATION_THUNK.getDoctorsByDepartment.rejected,
            (state, action) => {
               state.loading = false
               state.error = action.payload
            }
         )
   },
})

export const applicationActions = applicationSlice.actions
export const { handleIsCheckedItem, handleIsChecked, handleRemoveChecked } =
   applicationSlice.actions
