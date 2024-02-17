import { useRef } from 'react'
import Input from '../../../components/UI/inputs/Input'

const AddOnlineAppointments = () => {
   const inputRef = useRef(null)
   return (
      //   <Stack spacing={1.5} sx={{ minWidth: 300 }}>
      //      <Input
      //         type="number"
      //         defaultValue={2.5}
      //         slotProps={{
      //            input: {
      //               ref: inputRef,
      //               min: 1,
      //               max: 5,
      //               step: 0.1,
      //            },
      //         }}
      //      />
      //      <Input
      //         type="date"
      //         outlined
      //         slotProps={{
      //            input: {
      //               min: '2018-06-07',
      //               max: '2018-06-14',
      //            },
      //         }}
      //      />
      <div>
         <Input type="date" />
      </div>
      //   </Stack>
   )
}

export default AddOnlineAppointments
