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
      deletedAppointmentsIds: [],
   },

   reducers: {
      handleIsChecked: (state, action) => {
         state.selectAll = !state.selectAll
         state.selectAllApplications = action.payload
      },

      handleRemoveChecked: (state) => {
         state.selectAll = !state.selectAll
         state.selectAllApplications = []
      },

      handleIsCheckedItem: (state, { payload }) => {
         const idExists = state.selectAllApplications.includes(payload.id)

         state.selectAllApplications = idExists
            ? state.selectAllApplications.filter((item) => item !== payload.id)
            : [...state.selectAllApplications, payload.id]
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
