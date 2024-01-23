import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = () => {
   const tostify = () => {
      toast.success('Success', {
         position: 'top-left',
         autoClose: 5000,
         hideProgressBar: false,
         closeOnButton: false,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: 'light',
      })
   }
   return (
      <div>
         <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnButton
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />

         <button type="submit" onClick={tostify}>
            hello world
         </button>
      </div>
   )
}

export default Toast
