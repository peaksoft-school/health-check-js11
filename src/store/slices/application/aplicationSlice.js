import { createSlice } from '@reduxjs/toolkit'
import { APPLICATION_THUNK } from './applicationThunk'
import { showToast } from '../../../utils/helpers/notification'
import { SPECIALISTS_THUNK } from '../specialistsSlice/specialictsThunk'

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
   },
})

export const applicationActions = applicationSlice.actions
export const { handleIsCheckedItem, handleIsChecked, handleRemoveChecked } =
   applicationSlice.actions
