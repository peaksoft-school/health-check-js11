import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

export const chatBot = createAsyncThunk(
   'chatBot/messages',

   async (message, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/chat-bot/chat-api?message=${message}`
         )

         return response
      } catch (error) {
         if (error.response.status === 403) {
            showToast({
               message: 'произола ошибка',
               status: 'error',
            })
         } else {
            showToast({
               message: error.response.data.message,
               status: 'error',
            })
         }

         return rejectWithValue(error)
      }
   }
)
