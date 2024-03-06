import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../../Checkbox'
import { handleIsChecked } from '../../../../store/slices/application/aplicationSlice'

const SelectAllApplication = () => {
   const { selectAll } = useSelector((state) => state.applications)

   const dispatch = useDispatch()

   const handleCheckboxChange = () => {
      dispatch(handleIsChecked())
   }

   return <Checkbox checked={selectAll} onChange={handleCheckboxChange} />
}

export default SelectAllApplication
