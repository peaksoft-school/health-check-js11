import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const getResults = createAsyncThunk(
   'result/getUserResults',

   async (resultNumber, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/result?resultNumber=${resultNumber}`
         )

         return response.data
      } catch (error) {
         showToast({
            message: 'Не верный номер',
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

export const RESULTS_THUNKS = { getResults }
