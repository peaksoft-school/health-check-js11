import { createSlice } from '@reduxjs/toolkit'
import { showToast } from '../../../utils/helpers/notification'
import { chatBot } from './chatBotThunk'

const initialState = {
   messages: [],
   initialMessage: null,
   isLoading: false,
}

export const chatBotSlice = createSlice({
   name: 'chatBot',
   initialState,
   reducers: {
      saveMessage: (state, { payload }) => {
         state.messages.push(payload)
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(chatBot.fulfilled, (state, { payload }) => {
            if (state.messages.length === 0) {
               state.initialMessage = { data: payload, fromUser: false }
            } else {
               state.messages.push({ data: payload, fromUser: false })
            }
         })

         .addCase(chatBot.pending, (state) => {
            state.isLoading = true
         })

         .addCase(chatBot.rejected, (state) => {
            state.isLoading = false

            showToast({
               status: 'error',
               message: 'cl',
            })
         })
   },
})

export const { saveMessage } = chatBotSlice.actions
