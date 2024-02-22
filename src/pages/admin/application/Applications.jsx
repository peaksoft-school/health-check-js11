import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled, TableRow } from '@mui/material'
import { useDebounce } from 'use-debounce'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Table from '../../../components/UI/Table'

import { ONLINE_APPLICATIONS_COLUMN } from '../../../utils/constants/index'
import {
   deleteApplicationById,
   getApplicationData,
   updateApplication,
   searchApplications,
} from '../../../store/thunks/applicationThunk'

const Applications = () => {
   const dispatch = useDispatch()

   const [searchText, setSearchText] = useState('')

   const application = useSelector((state) => state.data.items)

   const searchResults = useSelector((state) => state.data.searchItems)

   const selectedItems = useSelector(
      (state) => state.data.selectAllApplications
   )

   const [debouncedSearchText] = useDebounce(searchText, 1000)

   useEffect(() => {
      dispatch(getApplicationData())
   }, [])

   useEffect(() => {
      if (debouncedSearchText.length !== '') {
         dispatch(searchApplications(debouncedSearchText))
      }
   }, [debouncedSearchText])

   const handleSearch = (e) => {
      const newSearchText = e.target.value
      setSearchText(newSearchText)
   }

   const filteredApplications = useMemo(() => {
      const renderItem = !searchText.length ? application : searchResults

      return renderItem?.filter((searchResult) =>
         searchResult.username?.toLowerCase().includes(searchText.toLowerCase())
      )
   }, [application, searchResults])

   const handleUpdate = async ({ id, isActive }) =>
      dispatch(updateApplication({ id, isActive }))

   const handleDelete = async ({ id }) =>
      dispatch(deleteApplicationById({ id }))

   const preperadeArray = filteredApplications.map((item, index) => {
      return {
         ...item,
         index,
         date: item.dateOfApplicationCreation,
         number: item.phoneNumber,
         processed: item.processed,
         name: item.username,
         update: (id, isActive) => handleUpdate({ id, isActive }),
         delete: (id) => handleDelete(id),
         isSelected: selectedItems.includes(item.id),
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
            <Table
               columns={ONLINE_APPLICATIONS_COLUMN}
               data={preperadeArray}
               className="table"
            />
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

      '& .MuiTable-root': {
         '& .MuiTableRow-root:nth-child(even)': {
            backgroundColor: '#f4f3f3',
         },
      },
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
