import React, { forwardRef, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import { FormControl, Select as UISelect, styled } from '@mui/material'
import Selector from 'react-select'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const menuProps = {
   PaperProps: {
      style: {
         minWidth: '20rem',
         maxHeight: 292,
         boxShadow: '0px 5px 44px 0px rgba(0, 0, 0, 0.06)',
         marginLeft: '0.7rem',
         borderRadius: '16px 8px 8px 16px ',
      },
   },
}

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

   menu: (provided) => ({
      ...provided,
      width: '220px',
   }),
}

const Select = forwardRef(
   (
      { options, value, onChange, placeholder, error, variant, icon, ...rest },
      ref
   ) => {
      const [selectVal, setSelectVal] = useState('')
      const [selectOpen, setSelectOpen] = useState(false)

      const handleChange = (e) => {
         onChange(e.target.value)
         setSelectVal(e.target.value)
      }

      const openSelectHandler = () => {
         setSelectOpen((prev) => !prev)
      }

      return (
         <div>
            {variant === 'schedule' ? (
               <Selector
                  options={options}
                  onChange={onChange}
                  isSearchable={false}
                  styles={{ ...customStyles }}
                  placeholder={placeholder}
                  error={error}
                  ref={ref}
                  {...rest}
               />
            ) : (
               <StyledFormControl fullWidth isopen={selectOpen.toString()}>
                  <Icon>{icon}</Icon>
                  <SelectMui
                     open={selectOpen}
                     value={selectVal}
                     onChange={handleChange}
                     IconComponent={KeyboardArrowDownIcon}
                     inputProps={{ 'aria-label': 'Without label' }}
                     MenuProps={menuProps}
                     displayEmpty
                     ref={ref}
                     error={error}
                     onClick={openSelectHandler}
                     {...rest}
                  >
                     <StyledLabel value="">{placeholder}</StyledLabel>
                     {options &&
                        options.map((item) => (
                           <MenuItemStyle key={item.id} value={item.label}>
                              {item.label}
                           </MenuItemStyle>
                        ))}
                  </SelectMui>
               </StyledFormControl>
            )}
         </div>
      )
   }
)

export default Select

const StyledFormControl = styled(FormControl)(() => ({
   '& .MuiOutlinedInput-notchedOutline': {
      border: 'none !important',
   },
}))

const StyledLabel = styled(FormControl)(() => ({
   display: 'none',
}))

const SelectMui = styled(UISelect)(({ error }) => ({
   maxWidth: '100%',
   border: error ? `1px solid #d32f2f` : '1px solid #D9D9D9',
   borderRadius: '10px',
   fontFamily: 'Manrope',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '21.86px',
   color: '#4D4E51',

   '&:hover': {
      '& fieldset': {
         border: '1px solid #959595',
         color: '#4D4E51',
      },
   },
   '&:active': {
      '& fieldset': {
         border: '1px solid rgba(4, 135, 65, 0.8)',
         color: '#4D4E51',
      },
   },
   '&:disabled': {
      '& fieldset': {
         border: '1px solid #959595',
         color: '#4D4E51',
      },
   },
}))

const Icon = styled('span')(() => ({
   position: 'absolute',
   top: 25,
   left: 15,
   zIndex: '10',
}))

const MenuItemStyle = styled(MenuItem)(({ theme }) => ({
   color: '#222222',
   fontFamily: 'Manrope',
   height: '3rem',
   marginLeft: '0.6rem',
   '&:hover': {
      background: '#DBF0E5',
   },
   '&:active': {
      background: '#DBF0E5',
   },
}))
