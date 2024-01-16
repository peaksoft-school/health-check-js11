// import styled from '@emotion/styled'
import { forwardRef } from 'react'
import Select from 'react-select'

const customStyles = {
   control: (provided, state) => ({
      ...provided,
      height: '38px',
      width: '490px',
      border: state.isFocused
         ? '1px solid rgba(4, 135, 65, 0.80)'
         : '1px solid #cccccc',
      boxShadow: 'none',
      '&:hover': {
         borderColor: state.isFocused ? 'none' : '#c1b5b5',
      },
   }),
}

const Selector = forwardRef(({ options, onChange, ...rest }, ref) => {
   return (
      <Select
         options={options}
         onChange={onChange}
         styles={customStyles}
         ref={ref}
         isSearchable={false}
         {...rest}
      />
   )
})

export default Selector
