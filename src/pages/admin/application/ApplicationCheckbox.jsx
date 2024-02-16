import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '../../../components/UI/Checkbox'
import {
   updateApplication,
   getApplicationData,
} from '../../../store/slices/applications-slice/aplicationsSlice'

const ApplicationCheckbox = ({ checked, id }) => {
   const [isChecked, setIsChecked] = useState(checked)

   const dispatch = useDispatch()

   const handleCheckboxChange = async () => {
      try {
         dispatch(updateApplication({ id, isActive: !isChecked }))

         setIsChecked(!isChecked)
      } catch (error) {
         console.error('Error updating status:', error)
      }
   }

   return <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
}

export default ApplicationCheckbox
