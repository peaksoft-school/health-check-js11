import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
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

   return <StyledCheckBox checked={isChecked} onChange={handleCheckboxChange} />
}

export default ApplicationCheckbox

const StyledCheckBox = styled(Checkbox)(() => ({
   '& .MuiSvgIcon-root': {
      '& .path': {
         fill: 'red',
      },
   },
}))
