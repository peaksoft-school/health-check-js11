import { useDispatch } from 'react-redux'
import Checkbox from '../../Checkbox'
import { APPOINTMENTS_ACTIONS } from '../../../../store/slices/appointmentsSlice'

const SelectSeparately = ({ isSelected, appointmentId }) => {
   const dispatch = useDispatch()

   const handleChange = () => {
      dispatch(
         APPOINTMENTS_ACTIONS.handleIsCheckedItem({
            appointmentId,
            checked: isSelected,
         })
      )
   }

   return <Checkbox checked={isSelected} onChange={handleChange} />
}

export default SelectSeparately
