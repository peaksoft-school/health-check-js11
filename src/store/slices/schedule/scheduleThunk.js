import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const getDoctorsByDepartment = createAsyncThunk(
   'schedule/getDoctorsByDepartment',
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
   'schedule/postNewSchedule',
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

const getSchedules = createAsyncThunk(
   'schedule/getSchedules',
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

         dispatch(getSchedules())
         showToast({ message: response.data.messageCode })
         return response.data
      } catch (error) {
         showToast({
            message: error.response.data.messageCode,
            status: 'error',
         })
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

         showToast({ message: response.data.messageCode })
         dispatch(getSchedules())
         return response.data
      } catch (error) {
         showToast({
            message: error.response.data.messageCode,
            status: 'error',
         })
         return rejectWithValue(error)
      }
   }
)

const deleteTimeSheets = createAsyncThunk(
   'schedule/deleteTimeSheets',
   async ({ doctorId, date, timeRanges }, { rejectWithValue, dispatch }) => {
      try {
         const formatedFromTimes = timeRanges.map(({ startTime }) => ({
            fromTime: `${startTime}`,
         }))

         const response = await axiosInstance.post(
            `/api/schedule/delete-time-sheets?doctorId=${doctorId}&date=${date}`,
            formatedFromTimes
         )

         dispatch(getSchedules())
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const scheduleSearch = createAsyncThunk(
   'schedule/scheduleSearch',
   async ({ searchName }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/schedule/search?word=${searchName}`,
            {
               params: { searchName },
            }
         )

         return response.data
      } catch (error) {
         showToast({ message: error.response.data.message, status: 'error' })
         return rejectWithValue(error)
      }
   }
)

export const SCHEDULE_THUNK = {
   getSchedules,
   postNewSchedule,
   getDoctorsByDepartment,
   savePatternTimeSheet,
   updateTimeSheetDoctor,
   deleteTimeSheets,
   scheduleSearch,
}
