import { forwardRef, useState } from 'react'
import {
   FormControl,
   Select as MuiSelect,
   Typography,
   styled,
   Box,
   MenuItem,
} from '@mui/material'
import Selector from 'react-select'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

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
      const [isVisible, setIsVisible] = useState(false)

      const changeHandler = (e) => {
         setSelectVal(e.target.value)
      }

      const toggleSelectHandler = () => setIsVisible((prev) => !prev)

      return (
         <Box>
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
               <StyledFormControl fullWidth isopen={isVisible.toString()}>
                  <Icon variant="span">{icon}</Icon>

                  <StyledMuiSelect
                     open={isVisible}
                     value={selectVal}
                     onChange={changeHandler}
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
                     <StyledLabel value="">{placeholder}</StyledLabel>

                     {/* <div className="ALISHER"> */}
                     {options &&
                        options.map(({ id, label }) => (
                           <MenuItemStyle key={id} value={label}>
                              {label}
                           </MenuItemStyle>
                        ))}
                     {/* </div> */}
                  </StyledMuiSelect>
               </StyledFormControl>
            )}
         </Box>
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

const StyledMuiSelect = styled(MuiSelect)(({ theme, error }) => ({
   maxWidth: '100%',

   border: error
      ? `1px solid #d32f2f`
      : `1px solid  ${theme.palette.secondary.main}`,

   borderRadius: '10px',
   fontFamily: 'Manrope',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '21.86px',
   color: '#4D4E51',

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

const Icon = styled(Typography)(() => ({
   position: 'absolute',
   top: 16,
   left: 15,
   zIndex: '100',
}))

const MenuItemStyle = styled(MenuItem)(({ theme }) => ({
   color: theme.palette.primary.lightBlack,
   fontFamily: 'Manrope',
   height: '3rem',
   marginLeft: '0.6rem',
   // height: '3rem',

   '&:hover': {
      background: theme.palette.tertiary.main,
   },

   '&:active': {
      background: theme.palette.tertiary.main,
   },
}))
