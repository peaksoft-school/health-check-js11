import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { useDebounce } from 'use-debounce'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Table from '../../../components/UI/Table'
import { APPLICATIONS_COLUMN } from '../../../utils/constants/columns'
import { APPLICATION_THUNK } from '../../../store/slices/application/applicationThunk'
import Loading from '../../../components/Loading'

const Applications = () => {
   const dispatch = useDispatch()

   const [searchText, setSearchText] = useState('')

   const { selectAllApplications, items, isLoading } = useSelector(
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

   const memoizedApplications = useMemo(() => preperadeArray, [preperadeArray])

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="button-container">
               <Typography variant="h3">Заявки</Typography>
            </Box>

            <Box>
               <Box className="input-container">
                  <StyledInput
                     value={searchText}
                     onChange={handleSearch}
                     placeholder="Поиск"
                  />
               </Box>

               {isLoading && <Loading />}

               <Box className="table-container">
                  <Table
                     columns={APPLICATIONS_COLUMN}
                     data={memoizedApplications}
                     className="table"
                  />
               </Box>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default Applications

const StyledContainer = styled(Box)(({ theme }) => ({
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
         background: theme.palette.primary.main,
         marginTop: '1.25rem',

         '& .MuiTable-root': {
            '& .MuiTableCell-root': {
               borderBottom: 'none',
            },

            '& .MuiTableCell-head': {
               borderBottom: '1px solid rgba(224, 224, 224, 1)',
            },

            '& .MuiTableRow-root:nth-of-type(even)': {
               backgroundColor: theme.palette.primary.backgroundAdmin,
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
