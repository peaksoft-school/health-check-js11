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
   (config) => {
      const updatedConfig = { ...config }

      const token =
         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDg3NjQ2MzAsImlhdCI6MTcwODUwNTQzMCwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifQ.EXR3U4NODU7QTHOh-9MP3xbL9YV6Ua7WAo1YvXNbtqw'

      if (token) {
         updatedConfig.headers.Authorization = `Bearer ${token}`
      }
      return config
   },

   (error) => {
      return Promise.reject(error)
   }
)

axios.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },

   (error) => {
      if (error.response && error.response.status === 401) {
         signOut()
      }
      return Promise.reject(error)
   }
)
