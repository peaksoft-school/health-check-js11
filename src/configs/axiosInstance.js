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

axiosInstance.interceptors.request.use(
   (config) => {
      const updatedConfig = { ...config }

      const token = storre.getState().auth.accessToken

      if (token) {
         updatedConfig.headers.Authorization = `Bearer ${token}`
      }

      return config
   },

   (error) => {
      return Promise.reject(error)
   }
)

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },

   (error) => {
      return Promise.reject(error)
   }
)
