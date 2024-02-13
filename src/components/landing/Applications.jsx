import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import SearchInput from '../UI/inputs/SearchInput'
import Table from '../UI/Table'
import {
   DATA_FOR_ONLINE_SIGN_UP,
   ONLINE_APPLICATIONS_COLUMN,
} from '../../utils/constants/index'

const Applications = () => {
   return (
      <StyledContainer>
         <StyledMainText>
            <Typography className="title">Заявки</Typography>
         </StyledMainText>
         <Box className="input-container">
            <SearchInput placeholder="Поиск" />
         </Box>
         <Box className="table-container">
            <Table
               columns={ONLINE_APPLICATIONS_COLUMN}
               data={DATA_FOR_ONLINE_SIGN_UP}
            />
         </Box>
      </StyledContainer>
   )
}

export default Applications

const StyledContainer = styled(Box)(() => ({
   padding: '1.87rem 4.37rem 0',
   backgroundColor: '#F5F5F5',

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
}))

const StyledMainText = styled(Typography)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   marginBottom: '1.87rem',
   width: '100%',

   '& > .title': {
      fontWeight: '400',
      lineHeight: 'normal',
      fontSize: '1.375rem',
   },
}))
