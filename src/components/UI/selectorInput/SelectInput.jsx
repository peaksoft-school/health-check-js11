import styled from '@emotion/styled'
import React, { forwardRef } from 'react'
import Select from 'react-select'

const customStyles = {
   control: (provided, state) => ({
      ...provided,
      height: 52,
      width: '100%',
      border: state.isFocused
         ? '1px solid rgba(4, 135, 65, 0.80)'
         : '1px solid #cccccc',
      boxShadow: 'none',
      '&:hover': {
         borderColor: state.isFocused ? 'none' : '#c1b5b5',
      },
   }),
}

const SelectInput = forwardRef(
   ({ defaultValue, options, onChange, ...rest }, ref) => {
      return (
         <StyledSelect
            defaultInputValue={defaultValue}
            options={options}
            onChange={onChange}
            styles={customStyles}
            ref={ref}
            className="inputBase"
            {...rest}
         />
      )
   }
)

export default SelectInput

const StyledSelect = styled(Select)({
   border: 'none',
   width: '400px',

   '&.inputBase': {
      fontFamily: 'Manrope',
      borderRadius: '8px',

      // '&.Mui-focused': {
      //    borderColor: 'rgba(4, 135, 65, 0.80)',
      // },
   },
})
