import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

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
            message: error.response.data.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

const postNewSchedule = createAsyncThunk(
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

const getAllSchedules = createAsyncThunk(
   'schedules/getSchedules',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/schedule/all')

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const savePatternTimeSheet = createAsyncThunk(
   'schedule/savePatternTimeSheet',
   async (requestData, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.post(
            '/api/schedule/save-pattern-time-sheet',
            requestData
         )

         dispatch(getAllSchedules())
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const updateTimeSheetDoctor = createAsyncThunk(
   'schedule/updateTimeSheetDoctor',
   async ({ doctorId, date, timeRanges }, { rejectWithValue, dispatch }) => {
      try {
         const formattedTimeRanges = timeRanges.map(
            ({ startHour, startMinute, endHour, endMinute }) => ({
               fromTime: `${startHour}:${startMinute}`,
               toTime: `${endHour}:${endMinute}`,
            })
         )

         const response = await axiosInstance.patch(
            `/api/schedule/update-time-sheet-doctor?doctorId=${doctorId}&date=${date}`,
            formattedTimeRanges
         )

         dispatch(getAllSchedules())
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const SCHEDULE_THUNK = {
   getAllSchedules,
   postNewSchedule,
   getDoctorsByDepartment,
   savePatternTimeSheet,
   updateTimeSheetDoctor,
}
