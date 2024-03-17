import { useDispatch, useSelector } from 'react-redux'
import { APPOINTMENTS_ACTIONS } from '../../store/slices/online-appointments/appointmentsSlice'
import Checkbox from '../UI/Checkbox'

const SelectAll = () => {
   const { selectAll } = useSelector((state) => state.appointments)

   const dispatch = useDispatch()

   const changeCheckbox = () => {
      dispatch(APPOINTMENTS_ACTIONS.handleIsChecked())
   }

   return <Checkbox checked={selectAll} onChange={changeCheckbox} />
}

export default SelectAll
