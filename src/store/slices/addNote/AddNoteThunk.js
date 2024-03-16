import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const postAddNote = createAsyncThunk(
   'addNote/postAddNote',
   async ({ values }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(`api/doctor`, values)

         showToast({
            message: 'запись успешно добавлена ',
         })

         return response.data
      } catch (error) {
         showToast({
            message: error.response.data.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

export const ADD_NOTE = {
   postAddNote,
}
