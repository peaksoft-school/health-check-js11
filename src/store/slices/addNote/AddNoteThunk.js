import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const postAddNote = createAsyncThunk(
   'addNote/postAddNote',
   async ({ values }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(`api/doctor`, values)

         showToast({
            message: 'Запись успешно добавлена ',
         })

         return response.data
      } catch (error) {
         if (error.response.status === 403) {
            showToast({
               message: 'Произошла ошибка',
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

export const ADD_NOTE = {
   postAddNote,
}
