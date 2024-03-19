import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getResults = createAsyncThunk(
   'result/getUserResults',

   async (resultNumber, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/result?resultNumber=${resultNumber}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const RESULTS_THUNKS = { getResults }
