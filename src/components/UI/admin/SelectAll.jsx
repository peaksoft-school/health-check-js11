import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../Checkbox'

const SelectAll = ({ variant, selectFn }) => {
   const { selectAll } = useSelector((state) => state.Appointments)
   const { selectAllApp } = useSelector((state) => state.applications)

   const select = () => {
      if (variant === 'appointments') {
         return selectAll
      }

      if (variant === 'applications') {
         return selectAllApp
      }
      return false
   }

   const dispatch = useDispatch()

   const changeCheckbox = () => {
      dispatch(selectFn())
   }

   return <Checkbox checked={select()} onChange={changeCheckbox} />
}

export default SelectAll
