import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '../../Checkbox'
import { updateAppointmentStatus } from '../../../../store/thunks/appointmentThunk'

const ProcessedCheckbox = ({ checked, appointmentId }) => {
   const [isChecked, setIsChecked] = useState(checked)
   const dispatch = useDispatch()

   useEffect(() => {
      setIsChecked(checked)
   }, [checked])

   const handleCheckboxChange = async () => {
      try {
         dispatch(
            updateAppointmentStatus({
               appointmentId,
               active: !isChecked,
               setIsChecked,
            })
         )
      } catch (error) {
         console.error('Error updating status:', error)
      }
   }

   return <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
}

export default ProcessedCheckbox
