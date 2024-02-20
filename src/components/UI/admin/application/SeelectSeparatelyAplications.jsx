import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../../Checkbox'
import { handleIsCheckedItem } from '../../../../store/slices/application-slice/aplicationSlice'

const SelectSeparately = ({ isSelected, id, isAllSelected }) => {
   const { selectAllApplications } = useSelector((state) => state.data)
   const dispatch = useDispatch()

   const handleChange = () => {
      console.log(id, 'fsad')
      console.log(isAllSelected, 'sdfghj')
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
