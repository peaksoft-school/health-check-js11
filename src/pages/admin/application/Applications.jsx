import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { useDebounce } from 'use-debounce'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Table from '../../../components/UI/Table'
import { APPLICATIONS_COLUMN } from '../../../utils/constants/columns'
import { APPLICATION_THUNK } from '../../../store/slices/application/applicationThunk'

const Applications = () => {
   const dispatch = useDispatch()

   const [searchText, setSearchText] = useState('')

   const { selectAllApplications, items } = useSelector(
      (state) => state.applications
   )

   const [debouncedSearchText] = useDebounce(searchText, 1000)

   useEffect(() => {
      if (debouncedSearchText !== undefined) {
         dispatch(
            APPLICATION_THUNK.searchApplications({
               searchText: debouncedSearchText,
            })
         )
      }
   }, [debouncedSearchText])

   const handleSearch = (e) => {
      setSearchText(e.target.value)
   }

   const handleUpdate = async ({ id, isActive }) =>
      dispatch(APPLICATION_THUNK.updateApplication({ id, isActive }))

   const handleDelete = async ({ id }) =>
      dispatch(APPLICATION_THUNK.deleteApplication({ id }))

   useEffect(() => {
      dispatch(APPLICATION_THUNK.getApplicationData())
   }, [])

   const preperadeArray = items.map((item, index) => {
      return {
         ...item,
         index,
         date: item.dateOfApplicationCreation,
         number: item.phoneNumber,
         processed: item.processed,
         name: item.username,
         update: (id, isActive) => handleUpdate({ id, isActive }),
         delete: (id) => handleDelete(id),
         isSelected: selectAllApplications.includes(item.id),
      }
   })

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
            {preperadeArray.length > 0 ? (
               <Table
                  columns={APPLICATIONS_COLUMN}
                  data={preperadeArray}
                  className="table"
               />
            ) : (
               <Typography className="not-application" variant="h5">
                  No Applications
               </Typography>
            )}
         </Box>
      </StyledContainer>
   )
}

export default Applications

const StyledSearchInput = styled(SearchInput)(() => ({
   width: '100%',
}))

const StyledContainer = styled(Box)(() => ({
   padding: '1.87rem 4.37rem 0',
   backgroundColor: '#F5F5F5',
   minHeight: '100vh',

   '& > .input-container': {
      width: '42.2rem',
      marginTop: '2.15rem',
   },

   '& > .table-container': {
      width: '100%',
      borderRadius: '0.375rem',
      bordeRradius: ' 0.375rem',
      background: '#FFF',
      height: '100%',
      marginTop: '1.25rem',
      '& .MuiTable-root': {
         '& .MuiTableRow-root:nth-of-type(even)': {
            backgroundColor: '#f4f3f3',
         },
      },
   },
   '& .not-application': {
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