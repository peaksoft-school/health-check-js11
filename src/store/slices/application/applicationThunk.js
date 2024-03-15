import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const createApplication = createAsyncThunk(
   'application/createApplication',
   async ({ userName, phoneNumber }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            '/api/application/createApplication',
            { userName, phoneNumber }
         )

         showToast({
            message: response.data.message,
         })

         return response.data
      } catch (error) {
         showToast({
            message: error.response.data.message,
         })

         return rejectWithValue(error.response.data)
      }
   }
)

export const APPLICATION_THUNK = {
   createApplication,
}
