import { useEffect, useMemo, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useDebounce } from 'use-debounce'
import Table from '../../../components/UI/Table'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import { PATIENTS_COLUMN } from '../../../utils/constants/columns'
import Loading from '../../../components/Loading'
import { PATIENTS_THUNKS } from '../../../store/slices/patients/patientsThunk'

const Patients = () => {
   const [searchName, setSearchName] = useState('')

   const { isLoading, patients } = useSelector((state) => state.patients)

   const memoizedPatients = useMemo(() => patients, [patients])

   const dispatch = useDispatch()

   const searchChange = (e) => setSearchName(e.target.value)

   const [debouncedSearchText] = useDebounce(searchName, 1000)

   useEffect(() => {
      if (debouncedSearchText !== undefined) {
         dispatch(
            PATIENTS_THUNKS.searchPatients({
               searchName: debouncedSearchText,
            })
         )
      }
   }, [debouncedSearchText])

   useEffect(() => {
      dispatch(PATIENTS_THUNKS.getPatients())
   }, [])

   return (
      <StyledContainer>
         <Box className="button-container">
            <Typography variant="h3">Пациенты</Typography>
         </Box>

         <Box>
            <Box className="input-container">
               <StyledInput
                  placeholder="Поиск"
                  value={searchName}
                  onChange={searchChange}
               />
            </Box>

            {isLoading && <Loading />}

            <Box className="table-container">
               <Table columns={PATIENTS_COLUMN} data={memoizedPatients} />
            </Box>
         </Box>
      </StyledContainer>
   )
}
export default Patients

const StyledContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   maxWidth: '1600px',
   margin: '0 auto',
   paddingBottom: '30px',
   minHeight: '100vh',

   '& h3': {
      marginTop: '15px',
      marginBottom: '15px',
      fontSize: '24px',
      fontWeight: '500',
   },

   '&  .tables': {
      padding: '0rem',
   },

   '& .input-container': {
      width: '37.5rem',
      marginTop: '2.12rem',
   },

   '&  .table-container': {
      width: '100%',
      height: '100%',
      borderRadius: '0.375rem',
      bordeRradius: ' 0.375rem',
      background: 'white',
      marginTop: '1.25rem',

      '& .MuiTable-root': {
         '& .MuiTableCell-root': {
            borderBottom: 'none',
         },

         '& .MuiTableRow-root': {
            borderBottom: 'none',
         },

         '& .MuiTableRow-root:nth-of-type(even)': {
            backgroundColor: theme.palette.primary.backgroundAdmin,
         },
      },
   },
}))

const StyledInput = styled(SearchInput)(() => ({
   height: '2.5rem',
   padding: '0rem 0.3rem',
   display: 'inline-flex',
   justifyContent: 'center',
   width: '100%',
}))
