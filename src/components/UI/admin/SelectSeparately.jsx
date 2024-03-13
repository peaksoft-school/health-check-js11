import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../Checkbox'

const SelectSeparately = ({ isSelected, selectFn, id, variant }) => {
   const dispatch = useDispatch()
   const { deletedAppointmentsIds } = useSelector((state) => state.Appointments)

   const getIds = () => {
      if (variant === 'appointments') {
         return deletedAppointmentsIds
      }
      return []
   }

   const changeCheckbox = () => {
      dispatch(
         selectFn({
            id,
            checked: isSelected,
         })
      )
   }

   const isChecked = isSelected || getIds().includes(id)

   return <Checkbox checked={isChecked} onChange={changeCheckbox} />
}

export default SelectSeparately
