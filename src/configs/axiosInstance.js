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

const signOut = () => {
   console.log('User signed out')
}

axios.interceptors.request.use(
   function (config) {
      const updatedConfig = { ...config }

      const token = null

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
      return Promise.resolve(response)
   },

   function (error) {
      if (error.response && error.response.status === 401) {
         signOut()
      }
      return Promise.reject(error)
   }
)
