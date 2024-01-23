import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = ({ options: { status, message } }) => {
   const [loggedIn, setLoggedIn] = useState(false)

   const handleLogin = () => {
      setLoggedIn(true)
   }

   const handleLogout = () => {
      setLoggedIn(false)
   }

   const tostify = () => {
      if (loggedIn) {
         toast[status](message, {
            draggable: true,
            position: 'top-left',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            progress: undefined,
            icon: false,
            style: {
               borderLeft: '10px',
               borderLeftColor: status === 'error' ? 'red' : 'green',
               borderLeftStyle: 'solid',
               borderRadius: 0,
            },
         })
      }
   }

   return (
      <div>
         <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
         />
         {loggedIn ? (
            <button type="button" onClick={handleLogout}>
               Log out
            </button>
         ) : (
            <button type="button" onClick={handleLogin}>
               Log in
            </button>
         )}
         <button type="button" onClick={tostify}>
            Show Notification
         </button>
      </div>
   )
}

export default Toast
