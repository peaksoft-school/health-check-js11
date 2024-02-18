import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

// console.log(BASE_URL)

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

axiosInstance.interceptors.request.use(
   function (config) {
      const updatedConfig = { ...config }

      const token =
<<<<<<< HEAD
         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDcyMTEyOTIsImlhdCI6MTcwNjYwNjQ5MiwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.58ghUGtCnVx0ymesWbGyEUDlX3eSsf6Zi3iWFtkH4Fk'

=======
         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDg1MDk4NzAsImlhdCI6MTcwODI1MDY3MCwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifQ.7BZQraIO4-7p4GmrGKu4sb02P0JMnIUVOhZyZFLZLHU'
>>>>>>> feature/applications-integration
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
