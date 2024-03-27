import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstanceFile } from '../../../configs/axiosInstaseFile'
import { showToast } from '../../../utils/helpers/notification'

const addFile = createAsyncThunk(
   'file/addFile',
   async ({ id, file }, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('file', file)

         const response = await axiosInstanceFile.post('/api/static', formData)

         return { id, link: response.data.link }
      } catch (error) {
         showToast({
            message: error.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

export const FILE_THUNKS = {
   addFile,
}
