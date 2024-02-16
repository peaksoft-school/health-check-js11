import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../../Checkbox'
import { APPOINTMENTS_ACTIONS } from '../../../../store/slices/appointmentsSlice'

const SelectSeparately = ({ isSelected, appointmentId }) => {
   const dispatch = useDispatch()
   const deletedAppointmentsIds = useSelector(
      (state) => state.appointmentsAdmin.deletedAppointmentsIds
   )

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
