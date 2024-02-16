import { Paper, InputBase, styled } from '@mui/material'
import { forwardRef } from 'react'
import { SearchIcon } from '../../../assets/icons'

const SearchInput = forwardRef(
   ({ placeholder, onChange, value, variant, ...rest }, ref) => (
      <StyledContainer variant={variant}>
         <InputBase
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            ref={ref}
            {...rest}
         />

         <SearchIcon className="search-icon" />
      </StyledContainer>
   )
)

export default SearchInput

const StyledContainer = styled(Paper)(({ variant }) => {
   const defaultStyles = {
      display: 'flex',
      alignItems: 'center',
      padding: '0.125rem 0.9rem',
      justifyContent: 'space-between',
      width: '100%',
      borderRadius: '1.563rem',
      boxShadow: 'none',

      '& .search-icon': {
         cursor: 'pointer',
      },
   }

   if (variant === 'secondary') {
      return {
         ...defaultStyles,
         width: '22.938rem',
         backgroundColor: '#F3F1F1',
      }
   }
   return defaultStyles
})
