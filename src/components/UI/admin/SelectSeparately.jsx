import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../Checkbox'
import { handleIsCheckedItem } from '../../../store/slices/application/aplicationSlice'

const SelectSeparately = ({ isSelected, selectFn, id, variant }) => {
   const dispatch = useDispatch()
   const { deletedAppointmentsIds } = useSelector((state) => state.Appointments)

   const getIds = () => {
      if (variant === 'appointments') {
         return deletedAppointmentsIds
      }
      return []
   }

   const handleChange = () => {
      dispatch(
         selectFn({
            id,
            checked: isSelected,
         })
      )
   }

   const isChecked = isSelected || getIds().includes(id)

   return <Checkbox checked={isChecked} onChange={handleChange} />
}

export default SelectSeparately
