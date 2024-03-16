import { createSlice } from '@reduxjs/toolkit'
import { ADD_NOTE } from './AddNoteThunk'

const initialState = {
   doctors: [],
   loading: false,
   error: null,
}

export const addNoteSlice = createSlice({
   name: 'addNote',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder

         .addCase(ADD_NOTE.postAddNote.pending, (state) => {
            state.loading = true
         })

         .addCase(ADD_NOTE.postAddNote.fulfilled, (state) => {
            state.loading = false
         })

         .addCase(ADD_NOTE.postAddNote.rejected, (state) => {
            state.loading = false
         })
   },
})
