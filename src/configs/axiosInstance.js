import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL
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
const signOut = () => {}

axiosInstance.interceptors.request.use(
   function (config) {
      const updatedConfig = { ...config }

      const token =
         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDg4NzE1NTgsImlhdCI6MTcwODYxMjM1OCwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifQ.6gOLH51X2oQd0Fc7hCaKmbhU3n4ZK4Ciy65OHL54RI4'

      if (token) {
         updatedConfig.headers.Authorization = `Bearer ${token}`
      }

      return updatedConfig
   },

   function (error) {
      return Promise.reject(error)
   }
)
axiosInstance.interceptors.response.use(
   function (response) {
      return Promise.resolve(response)
   },

   function (error) {
      if (error.response && error.response.status === 401) {
         signOut()
      }

      return Promise.reject(error)
   }
)
