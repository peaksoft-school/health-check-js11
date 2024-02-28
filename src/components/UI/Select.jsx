import { forwardRef } from 'react'
import Selector from 'react-select'

const customStyles = {
   control: (provided, state) => {
      let borderColor = state.isFocused ? 'rgba(4, 135, 65, 0.80)' : '#cccccc'

      if (state.selectProps.error) {
         borderColor = 'red'
      }

      return {
         ...provided,
         height: '45px',
         width: '100%',
         border: `1px solid ${borderColor}`,
         borderRadius: '10px',
         boxShadow: 'none',

         '& span': {
            width: '0px',
         },

         '&:hover': {
            borderColor: state.isFocused ? 'none' : '#c1b5b5',
            width: '100%',
         },
      }
   },
}

const Select = forwardRef(({ options, onChange, ...rest }, ref) => (
   <Selector
      options={options}
      onChange={onChange}
      styles={customStyles}
      ref={ref}
      isSearchable={false}
      {...rest}
   />
))

export default Select
