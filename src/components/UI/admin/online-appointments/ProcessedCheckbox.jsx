import { useState } from 'react'
import Checkbox from '../../Checkbox'

const ProcessedCheckbox = ({ checked }) => {
   const [isChecked, setIsChecked] = useState(checked)

   const handleCheckboxChange = () => {
      setIsChecked((prev) => !prev)
   }

   return <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
}

export default ProcessedCheckbox
