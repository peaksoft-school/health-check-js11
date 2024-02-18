import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { useDebounce } from 'use-debounce'
import SearchInput from '../UI/inputs/SearchInput'
import Table from '../UI/Table'
import { ONLINE_APPLICATIONS_COLUMN } from '../../utils/constants/index'
import {
   deleteApplicationById,
   getApplicationData,
   updateApplication,
   searchApplications,
} from '../../store/slices/applications-slice/aplicationsSlice'

const Applications = () => {
   const application = useSelector((state) => state.data.items)
   const update = useSelector((state) => state.data.isActive)
   const dispatch = useDispatch()
   const [searchText, setSearchText] = useState('')
   const searchResults = useSelector((state) => state.data.items)

   useEffect(() => {
      if (searchText.trim() === '') {
         dispatch(getApplicationData())
      }
   }, [searchText])

   const [debouncedSearchText] = useDebounce(searchText, 1000)

   useEffect(() => {
      if (debouncedSearchText !== undefined) {
         dispatch(
            searchApplications({
               searchText: debouncedSearchText,
            })
         )
      }
      const fetchData = async () => {
         try {
            dispatch(getApplicationData)
         } catch (error) {
            console.log('error')
         }
      }
      fetchData()
   }, [debouncedSearchText, dispatch])

   const handleSearch = (e) => {
      const newSearchText = e.target.value
      setSearchText(newSearchText)
      dispatch(searchApplications(newSearchText))
   }
   const filteredApplications = useMemo(() => {
      return searchResults?.filter((searchResult) =>
         searchResult.username.toLowerCase().includes(searchText.toLowerCase())
      )
   }, [searchResults, debouncedSearchText])

   const handleUpdate = async ({ id, isActive }) => {
      dispatch(updateApplication({ id, isActive }))
   }

   const handleDelete = ({ id }) => {
      dispatch(deleteApplicationById({ id }))
   }

   const preperadeArray = filteredApplications.map((item, index) => {
      return {
         ...item,
         index: index + 1,
         date: item.dateOfApplicationCreation,
         number: item.phoneNumber,
         processed: item.processed,
         name: item.username,
         update: (id, isActive) => handleUpdate({ id, isActive }),
         delete: (id) => handleDelete({ id }),
      }
   })

   return (
      <StyledContainer>
         <StyledMainText>
            <Typography className="title">Заявки</Typography>
         </StyledMainText>
         <Box className="input-container">
            <SearchInput
               value={searchText}
               onChange={handleSearch}
               placeholder="Поиск"
            />
         </Box>
         <Box className="table-container">
            <Table columns={ONLINE_APPLICATIONS_COLUMN} data={preperadeArray} />
         </Box>
      </StyledContainer>
   )
}

export default Applications

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
