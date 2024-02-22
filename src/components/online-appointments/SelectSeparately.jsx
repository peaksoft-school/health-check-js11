import { useDispatch, useSelector } from 'react-redux'
import { APPOINTMENTS_ACTIONS } from '../../store/slices/online-appointments/appointmentsSlice'
import Checkbox from '../UI/Checkbox'

const SelectSeparately = ({ isSelected, appointmentId }) => {
   const dispatch = useDispatch()
   const { deletedAppointmentsIds } = useSelector((state) => state.Appointments)

   const handleChange = () => {
      dispatch(
         APPOINTMENTS_ACTIONS.handleIsCheckedItem({
            appointmentId,
            checked: isSelected,
         })
      )
   }

   const isChecked =
      isSelected || deletedAppointmentsIds.includes(appointmentId)

   return <Checkbox checked={isChecked} onChange={handleChange} />
}

export default SelectSeparately
