import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from '@mui/material'
import Switcher from '../../UI/Switcher'
import { SPECIALISTS_THUNKS } from '../../../store/slices/specialists/specialictsThunk'

const SpecialistSwicher = ({ id, isActive }) => {
   const [isChecked, setChecked] = useState(isActive)

   const dispatch = useDispatch()

   useEffect(() => {
      setChecked(isActive)
   }, [])

   const changeCheckboxHandler = (e) => {
      dispatch(
         SPECIALISTS_THUNKS.updateDoctorStatus({
            id,
            checked: e.target.checked,
            setChecked,
         })
      )
   }

   return (
      <StyledSwitcher checked={isChecked} onChange={changeCheckboxHandler} />
   )
}

export default SpecialistSwicher

const StyledSwitcher = styled(Switcher)(() => ({
   marginLeft: '13px',
}))
