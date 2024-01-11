import React, { forwardRef } from 'react'
import { TextField, styled } from '@mui/material'

const Input = forwardRef(
   (
      {
         placeholder,
         onChange,
         value,
         error,
         label,
         type = 'text',
         size,
         ...rest
      },
      ref
   ) => {
      return (
         <StyledInput
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            error={error}
            label={label}
            type={type}
            size={size}
            ref={ref}
            {...rest}
         />
      )
   }
)

export default Input

const StyledInput = styled(TextField)(() => ({}))
