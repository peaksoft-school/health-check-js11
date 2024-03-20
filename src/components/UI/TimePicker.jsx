import { useState } from 'react'
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers'
import { styled } from '@mui/material'

const TimePicker = ({
   value,
   onChange,
   onBlur,
   format,
   maxTime,
   minTime,
   error,
   ...rest
}) => {
   const [internalValue, setInternalValue] = useState(value || '00:00')

   const handleChange = (time) => {
      setInternalValue(time)
      onChange(time)
   }

   return (
      <StyledTimePicker
         value={internalValue}
         onChange={handleChange}
         onBlur={onBlur}
         maxTime={maxTime}
         minTime={minTime}
         error={error}
         ampm={false}
         {...rest}
      />
   )
}

export default TimePicker

const StyledTimePicker = styled(MuiTimePicker)(({ error }) => ({
   borderRadius: '6px',
   fontFamily: 'Manropo',
   fontWeight: '400',
   fontSize: '14px',
   border: error ? '1px solid #d32f2f' : '1px solid #D4D4D4',

   input: {
      width: '3.7rem',
      padding: '3px 6px 3px 6px',
      height: '30px',
      fontSize: '17px',
      paddingRight: '0',
      '&::before': {
         content: "'00:00'",
      },
   },
   '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
   },
   '.MuiInputAdornment-root.MuiInputAdornment-positionEnd': {
      display: 'none',
   },
}))
