import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../Checkbox'

const SelectAll = ({ variant, selectFn }) => {
   const { selectAll } = useSelector((state) => state.onlineAppointments)

   const { isSelectAllApplications } = useSelector(
      (state) => state.applications
   )

   const checkedHandler = () => {
      if (variant === 'online-appointments') return selectAll
      if (variant === 'applications') return isSelectAllApplications
      return false
   }

   const dispatch = useDispatch()

   const changeCheckboxHandler = () => {
      dispatch(selectFn())
   }

   return (
      <Checkbox checked={checkedHandler()} onChange={changeCheckboxHandler} />
   )
}
export default SelectAll
