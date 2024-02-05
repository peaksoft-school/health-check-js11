import { Paper, InputBase, styled } from '@mui/material'
import { forwardRef } from 'react'
import { SearchIcon } from '../../../assets/icons'

const SearchInput = forwardRef(
   ({ placeholder, onChange, value, ...rest }, ref) => (
      <StyledContainer>
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

const StyledContainer = styled(Paper)(({ theme }) => {
   const defaultStyle = {
      display: 'flex',
      alignItems: 'center',
      padding: '0.125rem 0.9rem',
      justifyContent: 'space-between',
      width: '22.938rem',
      borderRadius: '1.563rem',
      backgroundColor: '#F3F1F1',
      boxShadow: 'none',
      caretColor: theme.palette.primary.darkGreen,

      '& .search-icon': {
         cursor: 'pointer',
      },
   }
})
