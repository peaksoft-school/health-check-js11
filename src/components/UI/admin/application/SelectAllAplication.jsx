import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Checkbox from '../../Checkbox'
import {
   handleIsChecked,
   handleRemoveChecked,
} from '../../../../store/slices/application/aplicationSlice'

const SelectAllApplication = () => {
   const { selectAll, items } = useSelector((state) => state.applications)

   const dispatch = useDispatch()

   const handleCheckboxChange = () => {
      if (!selectAll) {
         const selectedIds = items.map((item) => item.id)

         dispatch(handleIsChecked(selectedIds))
      } else {
         dispatch(handleRemoveChecked())
      }
   }

   return <Checkbox checked={selectAll} onClick={handleCheckboxChange} />
}

export default SelectAllApplication
