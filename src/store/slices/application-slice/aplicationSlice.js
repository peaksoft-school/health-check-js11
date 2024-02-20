import { createSlice } from '@reduxjs/toolkit'
import {
   deleteApplicationById,
   getApplicationData,
   searchApplications,
   updateApplication,
} from '../../thunks/applicationThunk'

const BASE_URL = process.env.API_URL

export const applicationSlice = createSlice({
   name: 'data',
   initialState: {
      items: [],
      status: 'idle',
      error: null,
      selectAllApplications: [],
      arrayForIds: [],
      selectAll: false,
   },
   reducers: {
      removeSelectedArray(state) {
         state.selectAllApplications = []
      },
      handleIsCheckedItem(state, { payload }) {
         state.items = state.items.map((appointment) => {
            // console.log(state.items, 'items')
            // console.log(appointment, 'appointment')
            if (appointment.appointmenId === payload.id) {
               return {
                  ...appointment,
                  isSelected: !appointment.isSelected,
               }
            }
            return appointment
         })
         state.arrayForIds = state.items
            .filter((appointment) => appointment.isSelected)
            .map((appointment) => appointment.appointmentId)
         if (state.arrayForIds.length === state.items.length) {
            state.selectAll = true
         } else {
            state.selectAll = false
         }
      },

      handleIsChecked: (state) => {
         console.log(state.arrayForIds, 'arrayforids')
         state.selectAll = !state.selectAll
         state.items = state.items.map((appointment) => ({
            ...appointment,
            isSelected: state.selectAll,
         }))
         state.arrayForIds = state.items
            .filter((appointment) => appointment.isSelected)
            .map((appointment) => appointment.id)
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
         .addCase(deleteApplicationById.fulfilled, (state, action) => {
            state.status = 'succeeded'
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
            state.items = action.payload
         })
         .addCase(searchApplications.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export const applicationActions = applicationSlice.actions
export const {
   selectAllApplicationsArrayFN,
   removeSelectedArray,
   handleIsCheckedItem,
   handleIsChecked,
} = applicationSlice.actions
