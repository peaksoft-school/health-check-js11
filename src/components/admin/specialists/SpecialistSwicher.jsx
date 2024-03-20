import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Switcher from '../../UI/Switcher'
import { APPLICATION_THUNK } from '../../../store/slices/application/applicationThunk'
import { SPECIALISTS_THUNK } from '../../../store/slices/specialistsSlice/specialictsThunk'

const SpocialistSwicher = ({ id, isActive }) => {
   const [active, setActive] = useState(isActive)

   const dispatch = useDispatch()

   useEffect(() => {
      setActive(isActive)
   }, [isActive])

   const handleCheckboxChange = async () => {
      try {
         dispatch(SPECIALISTS_THUNK.updateDoctorStatus({ id, active }))

         setActive(!active)
      } catch (error) {
         console.error('Error updating status:', error)
      }
   }

   return <Switcher checked={active} onChange={handleCheckboxChange} />
}

export default SpocialistSwicher
