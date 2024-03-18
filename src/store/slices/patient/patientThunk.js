import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'
import { axiosInstanceFile } from '../../../configs/axiosInstaseFile'

const getPatient = createAsyncThunk(
   'patients/getPatient',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/user/${id}`)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const postFile = createAsyncThunk('patients/postFile', async (data) => {
   try {
      const response = await axiosInstanceFile.post('/api/static', data)

      return response.data
   } catch (error) {
      return error
   }
})

const getPatientResult = createAsyncThunk(
   'patients/getPatientResult',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/result/${id}`)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const addPatientResult = createAsyncThunk(
   'patientsResult/addResult',
   async (result, { rejectWithValue, dispatch }) => {
      try {
         const getFile = await dispatch(postFile(result.url))

         const response = await axiosInstance.post('/api/result/save', {
            ...result,
            url: getFile.payload.link,
         })

         result.resetForm()
         result.closeHandler()

         dispatch(getPatientResult(result.id))

         return response.data
      } catch (error) {
         if (error.response.status === 403)
            showToast({
               message: 'ошибка на стороне сервера',
               status: 'error',
            })
         else
            showToast({
               message: error.message,
               status: 'error',
            })

         return rejectWithValue(error)
      }
   }
)

export const PATIENT_THUNKS = {
   getPatient,
   getPatientResult,
   addPatientResult,
}
