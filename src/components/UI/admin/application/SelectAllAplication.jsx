import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Checkbox from '../../Checkbox'
import {
   handleIsChecked,
   handleRemoveChecked,
} from '../../../../store/slices/application/aplicationSlice'

const SelectAllApplication = () => {
   const [status, setStatus] = useState(false)
   const { selectAllApplications, selectAll, items } = useSelector(
      (state) => state.applications
   )
   const isSelectAll = selectAllApplications.length === items.length || status
   const dispatch = useDispatch()

   const handleCheckboxChange = () => {
      setStatus((prevState) => !prevState)

      if (!selectAll) {
         const selectedIds = items.map((item) => item.id)

         dispatch(handleIsChecked(selectedIds))
      } else {
         dispatch(handleRemoveChecked())
      }
   }

   return <Checkbox checked={isSelectAll} onClick={handleCheckboxChange} />
}

export default SelectAllApplication
