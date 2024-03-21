import { useDispatch } from 'react-redux'
import { styled } from '@mui/material'
import Switcher from '../UI/Switcher'
import { SPECIALISTS_THUNK } from '../../store/slices/specialistsSlice/specialictsThunk'

const SpocialistSwicher = ({ id, isActive }) => {
   const dispatch = useDispatch()

   const changeCheckboxHandler = (checked) => {
      dispatch(SPECIALISTS_THUNK.updateDoctorStatus({ id, checked }))
   }

   return <StyledSwitcher checked={isActive} onChange={changeCheckboxHandler} />
}

export default SpocialistSwicher

const StyledSwitcher = styled(Switcher)(() => ({
   marginLeft: '13px',
}))
