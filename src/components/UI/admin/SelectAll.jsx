import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../Checkbox'

const SelectAll = ({ variant, selectFn }) => {
   const { selectAll } = useSelector((state) => state.onlineAppointments)
   const { isSelectAllApplications } = useSelector(
      (state) => state.applications
   )

   const checkedHandler = () => {
      if (variant === 'appointments') return selectAll

      if (variant === 'applications') return isSelectAllApplications

      return false
   }

   const dispatch = useDispatch()

   const changeCheckbox = () => {
      dispatch(selectFn())
   }

   return <Checkbox checked={checkedHandler()} onChange={changeCheckbox} />
}

export default SelectAll
