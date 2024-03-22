import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../Checkbox'

const SelectSeparately = ({
   isSelected,
   selectFn,
   id,
   variant,
   isDisabled,
}) => {
   const { deletedAppointmentsIds } = useSelector(
      (state) => state.onlineAppointments
   )

   const dispatch = useDispatch()

   const getIds = () => {
      if (variant === 'online-appointments') return deletedAppointmentsIds
      return []
   }

   const changeCheckboxHandler = () => {
      dispatch(
         selectFn({
            id,
            checked: isSelected,
         })
      )
   }

   const isChecked = isSelected || getIds().includes(id)

   return (
      <Checkbox
         checked={isChecked}
         onChange={changeCheckboxHandler}
         disabled={isDisabled}
      />
   )
}
export default SelectSeparately
