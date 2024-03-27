import { createSlice } from '@reduxjs/toolkit'
import { FILE_THUNKS } from './fileThunk'

const fileSlice = createSlice({
   name: 'file',
   initialState: {
      isDownloading: false,
   },
   reducers: {},

   extraReducers: (builder) =>
      builder
         .addCase(FILE_THUNKS.addFile.fulfilled, (state, { payload }) => {
            state[payload.id] = payload.link
            state.isDownloading = false
         })

         .addCase(FILE_THUNKS.addFile.pending, (state) => {
            state.isDownloading = true
         })

         .addCase(FILE_THUNKS.addFile.rejected, (state) => {
            state.isDownloading = false
         }),
})

const FILE_ACTIONS = fileSlice.actions

export { fileSlice, FILE_ACTIONS }
