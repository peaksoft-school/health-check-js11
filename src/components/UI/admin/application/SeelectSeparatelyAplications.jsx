import { useDispatch } from 'react-redux'
import Checkbox from '../../Checkbox'
import { handleIsCheckedItem } from '../../../../store/slices/application-slice/aplicationSlice'

const SelectSeparately = ({ isSelected, id }) => {
   const dispatch = useDispatch()

   const handleChange = () => {
      dispatch(
         handleIsCheckedItem({
            id,
            isSelected,
         })
      )
   }

   return <Checkbox checked={isSelected} onChange={handleChange} />
}

export default SelectSeparately
