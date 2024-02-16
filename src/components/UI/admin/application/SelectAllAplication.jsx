import { useState } from 'react'
import Checkbox from '../../Checkbox'

const SelectAllApplication = () => {
   const [isChecked, setIsChecked] = useState(false)

   const handleCheckboxChange = () => {
      setIsChecked((prev) => !prev)
   }

   return <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
}

export default SelectAllApplication
