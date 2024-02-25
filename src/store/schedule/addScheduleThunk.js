import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosInstance'
import { showToast } from '../../utils/helpers/notification'

const getDoctorsByDepartment = createAsyncThunk(
   'doctors/fetchDoctors',
   async ({ params }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `api/schedule/getDoctorsByDepartment?facility=${params}`
         )

         return response.data
      } catch (error) {
         showToast({
            message: 'error',
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

const postNewAppoinment = createAsyncThunk(
   'newSchedule/postSchedule',
   async (
      { doctorId, departmentName, schedule, resetForm, onClose },
      { rejectWithValue }
   ) => {
      try {
         const response = await axiosInstance.post(
            `api/schedule/saveScheduleDoctor?facility=${departmentName}&doctorId=${doctorId}`,
            schedule
         )

         resetForm()
         onClose()

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

export { getDoctorsByDepartment, postNewAppoinment }
