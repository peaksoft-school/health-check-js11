import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import Table from '../../../components/UI/Table'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Loading from '../../../components/Loading'
import {
   getAllPatients,
   searchPatients,
} from '../../../store/slices/patients/patientsThunk'
import { PATIENTS_COLUMN } from '../../../utils/constants/columns'

const Patients = () => {
   const [searchName, setSearchName] = useState('')

   const dispatch = useDispatch()

   const { isLoading, patients } = useSelector((state) => state.patients)

   const handleSearchChange = (e) => setSearchName(e.target.value)

   const [debouncedSearchText] = useDebounce(searchName, 1000)

   useEffect(() => {
      if (debouncedSearchText !== undefined) {
         dispatch(
            searchPatients({
               searchName: debouncedSearchText,
            })
         )
      }
   }, [debouncedSearchText])

   useEffect(() => {
      dispatch(getAllPatients())
   }, [])

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="button-container">
               <Typography variant="h3">Пациенты</Typography>
            </Box>

            <Box>
               <Box className="input-container">
                  <StyledInput
                     placeholder="Поиск"
                     value={searchName}
                     onChange={handleSearchChange}
                  />
               </Box>

               {isLoading && <Loading />}

               <Box className="table-container">
                  <Table
                     empty={<h1>Пациенты отсутствуют</h1>}
                     columns={PATIENTS_COLUMN}
                     data={patients}
                  />
               </Box>
            </Box>
         </Box>
      </StyledContainer>
   )
}
export default Patients

const StyledContainer = styled(Box)(() => ({
   padding: '1.87rem 4.37rem 0',
   backgroundColor: '#F5F5F5',

   '& > .box': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1600px',
      margin: '0 auto',
      paddingBottom: '30px',

      '& h3': {
         marginTop: '15px',
         marginBottom: '15px',
         fontSize: '24px',
         fontWeight: '500',
      },

      '& .tables': {
         padding: '0rem',
      },

      '& .input-container': {
         width: '37.5rem',
         marginTop: '2.12rem',
      },

      '& .table-container': {
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

            '& .MuiTableCell-head': {
               borderBottom: '1px solid rgba(224, 224, 224, 1)',
            },

            '& .MuiTableRow-root:nth-of-type(even)': {
               backgroundColor: '#F5F5F5',
            },
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
