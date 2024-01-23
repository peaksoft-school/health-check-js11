import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = ({ options: { status, message } }) => {
   const showError = status === 'error' ? 'error' : 'success'
   const tostify = () => {
      toast[showError](message, {
         draggable: true,
         position: 'top-left',
         autoClose: 5000,
         hideProgressBar: true,
         closeOnButton: false,
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

   return (
      <div>
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
         </div>

         <button type="submit" onClick={tostify}>
            hello world
         </button>
      </div>
   )
}

export default Toast
