import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../../Checkbox'
import { APPOINTMENTS_ACTIONS } from '../../../../store/slices/appointmentsSlice'

const SelectAll = () => {
   const { selectAll } = useSelector((state) => state.appointmentsAdmin)
   const dispatch = useDispatch()

   const handleCheckboxChange = () => {
      dispatch(APPOINTMENTS_ACTIONS.handleIsChecked())
   }

   return <Checkbox checked={selectAll} onChange={handleCheckboxChange} />
}

export default SelectAll
