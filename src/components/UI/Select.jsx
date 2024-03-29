import { forwardRef, useState } from 'react'
import {
   FormControl,
   Select as MuiSelect,
   styled,
   MenuItem,
} from '@mui/material'
import Selector, { components } from 'react-select'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { ChooseServiceIcon } from '../../assets/icons'

const menuProps = {
   PaperProps: {
      style: {
         minWidth: '20rem',
         maxHeight: '292',
         boxShadow: '0px 5px 44px 0px rgba(0, 0, 0, 0.06)',
         marginTop: '13.2rem',
         borderRadius: '16px 8px 8px 16px ',
      },
   },
}

const { Control } = components

const CustomControl = ({ children, ...props }) => (
   <Control {...props}>
      <StyledIcon />
      {children}
   </Control>
)

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
         cursor: 'pointer',

         '& span': {
            width: '0px',
         },

         '&:hover': {
            borderColor: state.isFocused ? '#c1b5b5' : '#c1b5b5',
            width: '100%',
         },
      }
   },

   menu: (provided) => ({
      ...provided,
      width: '220px',
      zIndex: 10000,
   }),

   menuList: (base) => ({
      ...base,

      '::-webkit-scrollbar': {
         width: '5px',
         height: '0px',
      },
      '::-webkit-scrollbar-track': {
         background: '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
         background: '#888',
      },
      '::-webkit-scrollbar-thumb:hover': {
         background: '#555',
      },
   }),
}

const customStylesAppointments = {
   control: (provided) => {
      return {
         ...provided,
         height: '60px',
         paddingLeft: '25px',
         width: '100%',
         border: 'none',
         borderRadius: '10px',
         boxShadow: 'none',

         '& span': {
            width: '0px',
         },
      }
   },

   menu: (provided) => ({
      ...provided,
      width: '365px',
   }),

   menuList: (base) => ({
      ...base,

      '::-webkit-scrollbar': {
         width: '5px',
         height: '0px',
      },
      '::-webkit-scrollbar-track': {
         background: '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
         background: '#888',
      },
      '::-webkit-scrollbar-thumb:hover': {
         background: '#555',
      },
   }),
}

const Select = forwardRef(
   (
      { options, onChange, placeholder, error, variant, icon, styles, ...rest },
      ref
   ) => {
      const [selectValue, setSelectValue] = useState('')
      const [isVisible, setIsVisible] = useState(false)

      const changeSelectHandler = (e) => {
         onChange(e.target.value)

         setSelectValue(e.target.value)
      }

      const toggleSelectHandler = () => setIsVisible((prev) => !prev)

      return variant === 'schedule' ? (
         <Selector
            options={options}
            onChange={onChange}
            isSearchable={false}
            styles={{ ...customStyles, ...styles }}
            placeholder={placeholder}
            error={error}
            ref={ref}
            value={selectValue}
            {...rest}
         />
      ) : variant === 'appointments' ? (
         <Selector
            options={options}
            onChange={onChange}
            isSearchable={false}
            styles={{ ...customStylesAppointments }}
            placeholder={
               <p className="select-placeholder-text">{placeholder}</p>
            }
            error={error}
            ref={ref}
            components={{ Control: CustomControl }}
            {...rest}
         />
      ) : (
         <StyledFormControl fullWidth isopen={isVisible.toString()}>
            <StyledMuiSelect
               open={isVisible}
               value={selectValue}
               onChange={changeSelectHandler}
               IconComponent={KeyboardArrowDownIcon}
               inputProps={{ 'aria-label': 'Without label' }}
               MenuProps={menuProps}
               className="select"
               displayEmpty
               ref={ref}
               error={error}
               onClick={toggleSelectHandler}
               {...rest}
            >
               <StyledLabel value={placeholder}>{placeholder}</StyledLabel>

               {options &&
                  options?.map(({ id, label }) => (
                     <StyledMenuItem key={id} value={label}>
                        {label}
                     </StyledMenuItem>
                  ))}
            </StyledMuiSelect>
         </StyledFormControl>
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

const StyledIcon = styled(ChooseServiceIcon)(() => ({
   marginRight: '11px',
}))

const StyledMuiSelect = styled(MuiSelect)(({ theme, error }) => ({
   border: error
      ? `1px solid #d32f2f`
      : `1px solid  ${theme.palette.secondary.main}`,

   maxWidth: '100%',
   borderRadius: '10px',
   fontFamily: 'Manrope',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '21.86px',
   color: '#4D4E51',
   cursor: 'pointer',

   '& > div': {
      '& > div': {
         marginLeft: '20rem',
      },
   },

   '&:hover': {
      '& fieldset': {
         border: `1px solid ${theme.palette.secondary.lightGrey}`,
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
         border: `1px solid ${theme.palette.secondary.lightGrey}`,
         color: '#4D4E51',
      },
   },
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
   color: theme.palette.primary.lightBlack,
   fontFamily: 'Manrope',
   height: '3rem',
   marginLeft: '0.6rem',

   '&:hover': {
      background: theme.palette.tertiary.main,
   },

   '&:active': {
      background: theme.palette.tertiary.main,
   },
}))
