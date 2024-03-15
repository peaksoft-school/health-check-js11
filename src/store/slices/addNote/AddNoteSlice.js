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
         .addCase(ADD_NOTE.postAddNotepending, (state) => {
            state.loading = true
         })
         .addCase(ADD_NOTE.postAddNotepending, (state) => {
            state.loading = false
         })
         .addCase(ADD_NOTE.postAddNotepending, (state) => {
            state.loading = false
         })
   },
})

export const addNoteAction = addNoteSlice.actions
