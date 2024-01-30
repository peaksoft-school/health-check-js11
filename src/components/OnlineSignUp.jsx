import { Box, ButtonBase, Typography, styled } from '@mui/material'
import Table from './UI/Table'
import {
   COLUMNS_FOR_ONLINE_SIGN_UP,
   DATA_FOR_ONLINE_SIGN_UP,
} from '../utils/constants'
import Button from './UI/Button'
import { PlusIcon } from '../assets/icons'
import SearchInput from './UI/inputs/SearchInput'

const OnlineSignUp = () => {
   return (
      <StyledContainer>
         <StyledAddAntry>
            <Typography className="title">Онлайн-запись</Typography>

            <StyledAddButton className="add-button">
               <PlusIcon className="plus-icon" /> Добавить запись
            </StyledAddButton>
         </StyledAddAntry>

         <Box>
            <ButtonBase className="route">Онлайн-запись</ButtonBase>
            <ButtonBase className="route">Расписание</ButtonBase>
         </Box>

         <Box className="input-container">
            <SearchInput placeholder="Поиск" className="search-input" />
         </Box>

         <Box className="table-container">
            <Table
               tableHeader={COLUMNS_FOR_ONLINE_SIGN_UP}
               data={DATA_FOR_ONLINE_SIGN_UP}
            />
         </Box>
      </StyledContainer>
   )
}

export default OnlineSignUp

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   padding: '1.87rem 4.37rem 0',
   backgroundColor: '#F5F5F5',
   height: '100vh',
   maxWidth: '1600px',
   margin: '0 auto',

   '& .route': {
      fontSize: '0.75rem',
      fontWeight: '600',
      lineHeight: 'normal',
      letterSpacing: '0.0625rem',
      textTransform: 'uppercase',
      marginRight: '1.87rem',
      paddingBottom: '0.56rem',

      '&:focus': {
         color: '#048741',
         borderBottom: '1px solid green',
      },
   },

   '& .input-container': {
      width: '37.5rem',
      marginTop: '2.12rem',

      '& .search-input': {
         height: '2.5rem',
         padding: '0rem 0.3rem',
         display: 'inline-flex',
         justifyContent: 'center',
         fontFamily: 'Manrope',
         background: 'white',
         width: '100%',
      },
   },

   '& .table-container': {
      width: '100%',
      borderRadius: '0.375rem',
      bordeRradius: ' 0.375rem',
      background: '#FFF',
      height: '100%',
      marginTop: '1.25rem',
   },
}))

const StyledAddAntry = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   marginBottom: '1.87rem',
   width: '100%',

   '& .add-button': {
      fontFamily: 'Manrope',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
      letterSpacing: '0.02625rem',
      textTransform: 'uppercase',
      display: 'inline-flex',
      height: '2.75rem',
      padding: '0.625rem 1.5rem 0.625rem 1rem !important',
      alignItems: 'center',
      gap: '0.625rem',
      width: '13.0625rem !important',
      flexShrink: '0',
      background: '#0b8f54',

      '&:hover': {
         background: '#0b8f54',
      },

      '& .plus-icon': {
         width: '1.125rem',
         height: '1.125rem',
      },
   },

   '& .title': {
      fontSize: '1.375rem',
      fontWeight: '400',
      lineHeight: 'normal',
   },
}))

const StyledAddButton = styled(Button)(() => ({}))
