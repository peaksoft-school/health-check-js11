import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '../../Checkbox'
import { APPLICATION_THUNK } from '../../../../store/slices/application/applicationThunk'

const ApplicationCheckbox = ({ checked, id }) => {
   const [isChecked, setIsChecked] = useState(checked)

   const dispatch = useDispatch()

   useEffect(() => {
      setIsChecked(checked)
   }, [checked])

   const handleCheckboxChange = async () => {
      try {
         dispatch(
            APPLICATION_THUNK.updateApplication({ id, isActive: !isChecked })
         )
         setIsChecked(!isChecked)
      } catch (error) {
         console.error('Error updating status:', error)
      }
   }

   return <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
}

export default ApplicationCheckbox
