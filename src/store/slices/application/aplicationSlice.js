import { createSlice } from '@reduxjs/toolkit'
import { APPLICATIONS_THUNKS } from './applicationThunk'
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

         .addCase(APPLICATIONS_THUNKS.getApplicationData.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(
            APPLICATIONS_THUNKS.getApplicationData.fulfilled,
            (state, action) => {
               state.status = 'succeeded'
               state.items = action.payload
            }
         )

         .addCase(
            APPLICATIONS_THUNKS.getApplicationData.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )

         .addCase(APPLICATIONS_THUNKS.deleteApplication.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(APPLICATIONS_THUNKS.deleteApplication.fulfilled, () => {
            showToast({
               message: 'запись удалена',
            })
         })

         .addCase(
            APPLICATIONS_THUNKS.deleteApplication.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )

         .addCase(APPLICATIONS_THUNKS.updateApplication.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(APPLICATIONS_THUNKS.updateApplication.fulfilled, (state) => {
            state.error = false
         })

         .addCase(
            APPLICATIONS_THUNKS.updateApplication.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )

         .addCase(APPLICATIONS_THUNKS.searchApplications.pending, (state) => {
            state.status = 'loading'
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

                  state.items = updatedApplications
               }

               state.status = 'succeeded'
               state.searchItems = action.payload
            }
         )

         .addCase(
            APPLICATIONS_THUNKS.searchApplications.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )

         .addCase(APPLICATIONS_THUNKS.deleteAllApplication.fulfilled, () => {
            showToast({
               message: 'Успешно удалено ',
            })
         })
   },
})

export const applicationActions = applicationSlice.actions
export const { handleIsCheckedItem, handleIsChecked, handleRemoveChecked } =
   applicationSlice.actions
