import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '../../Checkbox'
import {
   updateApplication,
   getApplicationData,
} from '../../../../store/slices/applications-slice/aplicationsSlice'

const ProcessedCheckbox = ({ checked, id }) => {
   const [isChecked, setIsChecked] = useState(checked)

   return <Checkbox checked={isChecked} />
}

export default ProcessedCheckbox
