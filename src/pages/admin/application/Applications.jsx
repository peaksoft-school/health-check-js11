import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { useDebounce } from 'use-debounce'
import { APPLICATIONS_COLUMN } from '../../../utils/constants/columns'
import { APPLICATIONS_THUNKS } from '../../../store/slices/application/applicationThunk'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Table from '../../../components/UI/Table'
import { NoDataImage } from '../../../assets/images'

const Applications = () => {
   const dispatch = useDispatch()

   const [searchText, setSearchText] = useState('')

   const { applications } = useSelector((state) => state.applications)

   const [debouncedSearchText] = useDebounce(searchText, 1000)

   useEffect(() => {
      if (debouncedSearchText !== undefined) {
         dispatch(
            APPLICATIONS_THUNKS.searchApplications({
               searchText: debouncedSearchText,
            })
         )
      }
   }, [debouncedSearchText])

   const handleSearch = (e) => {
      setSearchText(e.target.value)
   }

   useEffect(() => {
      dispatch(APPLICATIONS_THUNKS.getApplicationData())
   }, [])

   return (
      <StyledContainer>
         <StyledMainText>
            <Typography className="title">Заявки</Typography>
         </StyledMainText>

         <Box className="input-container">
            <StyledSearchInput
               value={searchText}
               onChange={handleSearch}
               placeholder="Поиск"
            />
         </Box>

         <Box className="table-container">
            {applications.length > 0 ? (
               <Table
                  columns={APPLICATIONS_COLUMN}
                  data={applications}
                  className="table"
               />
            ) : (
               <img src={NoDataImage} alt="no-data" className="no-data" />
            )}
         </Box>
      </StyledContainer>
   )
}

export default Applications

const StyledSearchInput = styled(SearchInput)(() => ({
   height: '2.5rem',
   padding: '0rem 0.3rem',
   display: 'inline-flex',
   justifyContent: 'center',
   width: '100%',
}))

const StyledContainer = styled(Box)(() => ({
   '& > .input-container': {
      width: '37.5rem',
      marginTop: '2.15rem',
   },

   '& > .table-container': {
      width: '100%',
      borderRadius: '0.375rem',
      bordeRradius: ' 0.375rem',
      background: '#FFF',
      height: '100%',
      marginTop: '1.25rem',

      '& .no-data': { width: '1300px' },

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

   '& > .not-application': {
      textAlign: 'center',
      color: 'green',
      fontWeight: '10rem',
   },
}))

const StyledMainText = styled('h3')(() => ({
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
