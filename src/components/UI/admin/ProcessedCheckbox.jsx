import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '../Checkbox'

const ProcessedCheckbox = ({ checked, variant, id, updateFn }) => {
   const [isChecked, setIsChecked] = useState(checked)

   const dispatch = useDispatch()

   useEffect(() => {
      setIsChecked(checked)
   }, [checked])

   const changeCheckbox = () => {
      try {
         if (variant === 'appointments') {
            dispatch(
               updateFn({
                  appointmentId: id,
                  active: !isChecked,
                  setIsChecked,
               })
            )
         } else if (variant === 'applications') {
            dispatch(updateFn({ id, isActive: !isChecked }))
         }
      } catch (error) {
         console.error('Error updating status:', error)
      }
   }

   return <Checkbox checked={isChecked} onChange={changeCheckbox} />
}

export default ProcessedCheckbox
