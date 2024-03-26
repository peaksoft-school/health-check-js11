import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { useDebounce } from 'use-debounce'
import { APPLICATIONS_COLUMN } from '../../../utils/constants/columns'
import { NoDataImage } from '../../../assets/images'
import { APPLICATIONS_THUNKS } from '../../../store/slices/applications/applicationsThunk'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Table from '../../../components/UI/Table'
import Loading from '../../../components/Loading'

const Applications = () => {
   const dispatch = useDispatch()

   const [searchText, setSearchText] = useState('')

   const { applications, isLoading } = useSelector(
      (state) => state.applications
   )

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

   const memoizedApplications = useMemo(() => applications, [applications])

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="button-container">
               <Typography variant="h3">Заявки</Typography>
            </Box>

            <Box>
               <Box className="input-container">
                  <StyledSearchInput
                     value={searchText}
                     onChange={handleSearch}
                     placeholder="Поиск"
                  />
               </Box>

               <Box className="table-container">
                  {memoizedApplications.length > 0 ? (
                     <Table
                        columns={APPLICATIONS_COLUMN}
                        data={memoizedApplications}
                        className="table"
                     />
                  ) : (
                     <img src={NoDataImage} alt="no-data" className="no-data" />
                  )}
                  {isLoading && <Loading />}
               </Box>
            </Box>
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

const StyledContainer = styled(Box)(({ theme }) => ({
   '& .input-container': {
      width: '37.5rem',
      marginTop: '2.15rem',
   },

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

      '& .no-data': { width: '1300px' },
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

         '& .MuiTableRow-root': {
            borderBottom: 'none',
         },

         '& .MuiTableRow-root:nth-of-type(even)': {
            backgroundColor: theme.palette.primary.backgroundAdmin,
         },
      },
   },
}))
