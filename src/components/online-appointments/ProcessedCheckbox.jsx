import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { APPOINTMENTS_THUNK } from '../../store/slices/online-appointments/appointmentThunk'
import Checkbox from '../UI/Checkbox'

const ProcessedCheckbox = ({ checked, appointmentId }) => {
   const [isChecked, setIsChecked] = useState(checked)

   const dispatch = useDispatch()

   useEffect(() => {
      setIsChecked(checked)
   }, [checked])

   const changeCheckbox = () => {
      try {
         dispatch(
            APPOINTMENTS_THUNK.updateAppointment({
               appointmentId,
               active: !isChecked,
               setIsChecked,
            })
         )
      } catch (error) {
         console.error('Error updating status:', error)
      }
   }

   return <Checkbox checked={isChecked} onChange={changeCheckbox} />
}

export default ProcessedCheckbox
