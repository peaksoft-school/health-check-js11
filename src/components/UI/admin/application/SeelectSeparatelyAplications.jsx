import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../../Checkbox'
import { handleIsCheckedItem } from '../../../../store/slices/application/aplicationSlice'

const SelectSeparately = ({ isSelected, id }) => {
   const { selectAllApplications } = useSelector((state) => state.applications)

   const dispatch = useDispatch()

   const handleChange = () => {
      dispatch(
         handleIsCheckedItem({
            id,
            checked: isSelected,
         })
      )
   }
   const isChecked = isSelected || selectAllApplications.includes(id)

   return <Checkbox checked={isChecked} onChange={handleChange} />
}

export default SelectSeparately
