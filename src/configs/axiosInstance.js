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
         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDg4NjU0MDUsImlhdCI6MTcwODYwNjIwNSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifQ.p5UyU212jhA0VUnJdz76PTQRTf5hi0jzgsrxnX9lJeg'

      if (token) {
         updatedConfig.headers.Authorization = `Bearer ${token}`
      }

      return config
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
