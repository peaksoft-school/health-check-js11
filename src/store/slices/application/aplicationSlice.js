import { createSlice } from '@reduxjs/toolkit'
import {
   deleteApplicationById,
   deleteAllApplication,
   getApplicationData,
   searchApplications,
   updateApplication,
} from './applicationThunk'
import { showToast } from '../../../utils/helpers/notification'

export const applicationSlice = createSlice({
   name: 'applications',
   initialState: {
      items: [],
      searchItems: [],
      status: 'idle',
      error: null,
      selectAllApplications: [],
      selectAll: false,
   },

   reducers: {
      handleIsChecked: (state, action) => {
         state.selectAll = !state.selectAll

         state.items = state.items.map((item) => ({
            ...item,
            isSelected: state.selectAll,
         }))

         state.selectAllApplications = state.items
            .filter((item) => item.isSelected)
            .map((item) => item.id)

         console.log(state.selectAllApplications, 'dsf')
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
            state.selectAll = true
         } else {
            state.selectAll = false
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

         .addCase(getApplicationData.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(getApplicationData.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.items = action.payload
         })

         .addCase(getApplicationData.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(deleteApplicationById.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(deleteApplicationById.fulfilled, () => {
            showToast({
               message: 'запись удалена',
            })
         })

         .addCase(deleteApplicationById.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(updateApplication.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(updateApplication.fulfilled, (state) => {
            state.error = false
         })

         .addCase(updateApplication.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(searchApplications.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(searchApplications.fulfilled, (state, action) => {
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
         })

         .addCase(searchApplications.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(deleteAllApplication.fulfilled, () => {
            showToast({
               message: 'Успешно удалено ',
            })
         })
   },
})

export const applicationActions = applicationSlice.actions
export const { handleIsCheckedItem, handleIsChecked, handleRemoveChecked } =
   applicationSlice.actions
