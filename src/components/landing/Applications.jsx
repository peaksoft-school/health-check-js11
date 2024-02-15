import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import SearchInput from '../UI/inputs/SearchInput'
import Table from '../UI/Table'
import { ONLINE_APPLICATIONS_COLUMN } from '../../utils/constants/index'
import {
   applicationSearch,
   deleteApplicationById,
   getApplicationData,
   updateApplication,
} from '../../store/slices/applications-slice/aplicationsSlice'

const Applications = () => {
   const aplication = useSelector((state) => state.data.items)
   const update = useSelector((state) => state.data.isActive)
   const dispatch = useDispatch()
   const [searchText, setSearchText] = useState('')

   useEffect(() => {
      dispatch(getApplicationData())
   }, [])

   const handleUpdate = async ({ id, isActive }) => {
      dispatch(updateApplication({ id, isActive }))
   }

   const handleDelete = ({ id }) => {
      dispatch(deleteApplicationById({ id }))
   }

   const handleSearch = (e) => {
      const newSearchText = e.target.value
      setSearchText(newSearchText)
      dispatch(
         applicationSearch({
            searchText: newSearchText,
            otherParam: 'word',
         })
      )
   }

   const preperadeArray = aplication.map((item, index) => {
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
