import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})

let storre

export const injectStore = (store) => {
   storre = store
}

axios.interceptors.request.use(
   function (config) {
      const updatedConfig = { ...config }

      const token =
         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDcyMTEyOTIsImlhdCI6MTcwNjYwNjQ5MiwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.58ghUGtCnVx0ymesWbGyEUDlX3eSsf6Zi3iWFtkH4Fk'

      if (token) {
         updatedConfig.headers.Authorization = `Bearer ${token}`
      }
      return config
   },

   function (error) {
      return Promise.reject(error)
   }
)

axios.interceptors.response.use(
   function (response) {
      return response
   },

   function (error) {
      return Promise.reject(error)
   }
)
