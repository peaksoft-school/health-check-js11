import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

export const axiosInstanceFile = axios.create({
   baseURL: BASE_URL,

   headers: {
      'Content-Type': 'multipart/form-data',
   },
})

let storre

export const fileInjectStore = (store) => {
   storre = store
}

axiosInstanceFile.interceptors.request.use(
   (config) => {
      const updateConfig = { ...config }

      const token = storre.getState().auth.accessToken

      if (token) {
         updateConfig.headers.Authorization = `Bearer ${token}`
      }

      return updateConfig
   },

   (error) => {
      return Promise.reject(error)
   }
)

axiosInstanceFile.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },

   (error) => {
      return Promise.reject(error)
   }
)
