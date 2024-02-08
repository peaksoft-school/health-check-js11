import { Box, ButtonBase, Typography, styled } from '@mui/material'
import Table from '../../../components/UI/Table'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Button from '../../../components/UI/Button'
import {
   ONLINE_APPOINTMENTS_COLUMN,
   DATA_FOR_ONLINE_SIGN_UP,
} from '../../../utils/constants'
import { PlusIcon } from '../../../assets/icons'

const OnlineAppointments = () => (
   <StyledContainer>
      <Box className="box">
         <StyledAddAntry>
            <Typography className="title">Онлайн-запись</Typography>

            <Button className="add-button">
               <PlusIcon className="plus-icon" /> Добавить запись
            </Button>
         </StyledAddAntry>

         <Box>
            <ButtonBase className="tab">Онлайн-запись</ButtonBase>
            <ButtonBase className="tab">Расписание</ButtonBase>
         </Box>

         <Box className="input-container">
            <StyledInput placeholder="Поиск" />
         </Box>

         <Box className="table-container">
            <Table
               columns={ONLINE_APPOINTMENTS_COLUMN}
               data={DATA_FOR_ONLINE_SIGN_UP}
            />
         </Box>
      </Box>
   </StyledContainer>
)

export default OnlineAppointments

const StyledContainer = styled(Box)(() => ({
   padding: '1.87rem 4.37rem 0',
   backgroundColor: '#F5F5F5',

   '& > .box': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1600px',
      height: '100vh',
      margin: '0 auto',

      '& .tab': {
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

      '& > .input-container': {
         width: '37.5rem',
         marginTop: '2.12rem',
      },

      '& > .table-container': {
         width: '100%',
         borderRadius: '0.375rem',
         bordeRradius: ' 0.375rem',
         background: '#FFF',
         height: '100%',
         marginTop: '1.25rem',
      },
   },
}))

const StyledInput = styled(SearchInput)(() => ({
   height: '2.5rem',
   padding: '0rem 0.3rem',
   display: 'inline-flex',
   justifyContent: 'center',
   fontFamily: 'Manrope',
   width: '100%',
}))

const StyledAddAntry = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   marginBottom: '1.87rem',
   width: '100%',

   '& > .title': {
      fontSize: '1.375rem',
      fontWeight: '400',
      lineHeight: 'normal',
   },

   '& > .add-button': {
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

      '& > .plus-icon': {
         width: '1.125rem',
         height: '1.125rem',
      },
   },
}))
