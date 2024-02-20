import { useDispatch, useSelector } from 'react-redux'
import Checkbox from '../../Checkbox'
import { handleIsChecked } from '../../../../store/slices/application-slice/aplicationSlice'

const SelectAllApplication = () => {
   const { items, selectAllApplications, selectAll } = useSelector(
      (store) => store.data
   )
   const dispatch = useDispatch()
   const handleCheckboxChange = () => {
      dispatch(handleIsChecked())
   }

   return <Checkbox checked={selectAll} onChange={handleCheckboxChange} />
}

export default SelectAllApplication
