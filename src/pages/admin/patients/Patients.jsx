import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import Table from '../../../components/UI/Table'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import { COLUMNS, PATIENTS_COLUMN } from '../../../utils/constants/columns'

const Patients = () => {
   return (
      <StyledPatients>
         <Box className="box">
            <Box>
               <Typography className="title">Пациенты</Typography>
               <Box className="input-container">
                  <StyledInput placeholder="Поиск" />
               </Box>
            </Box>
            <Box className="table-container">
               <Table columns={PATIENTS_COLUMN} data={COLUMNS} />
            </Box>
         </Box>
      </StyledPatients>
   )
}

export default Patients
const StyledPatients = styled(Box)(() => ({
   padding: '1.87rem 4.37rem 0',
   backgroundColor: '#F5F5F5',
   '& > .box': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1600px',
      margin: '0 auto',
      paddingBottom: '30px',
   },
   '& .title': {
      fontSize: '1.375rem',
      fontWeight: '400',
      lineHeight: 'normal',
      marginBottom: '1.87rem',
   },
   '& .input-container': {
      width: '37.5rem',
      marginTop: '2.12rem',
   },
   '& .table-container': {
      width: '100%',
      borderRadius: '0.375rem',
      bordeRradius: ' 0.375rem',
      background: 'white',
      marginTop: '1.25rem',
   },
}))

const StyledInput = styled(SearchInput)(() => ({
   width: '100%',
}))
