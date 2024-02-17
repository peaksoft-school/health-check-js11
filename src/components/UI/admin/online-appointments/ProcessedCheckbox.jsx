import { useState } from 'react'
import Checkbox from '../../Checkbox'

const ProcessedCheckbox = ({ checked }) => {
   const [isChecked, setIsChecked] = useState(checked)

   return <Checkbox checked={isChecked} />
}

export default ProcessedCheckbox
