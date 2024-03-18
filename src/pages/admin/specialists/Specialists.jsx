import { Box, Typography, Tab, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import Table from '../../../components/UI/Table'
import Button from '../../../components/UI/Button'
import { PlusIcon } from '../../../assets/icons'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Loading from '../../../components/Loading'
import { SPECIALISTS_COLUMN } from '../../../utils/constants/columns'
import { SPECIALISTS_THUNK } from '../../../store/slices/specialistsSlice/specialictsThunk'
import { ROUTES } from '../../../routes/routes'

const Specialists = () => {
   const [searchName, setSearchName] = useState('')

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(SPECIALISTS_THUNK.getSpecialists())
   }, [])

   const { isLoading, specialists } = useSelector((state) => state.specialists)

   const handleSearchChange = (e) => setSearchName(e.target.value)

   const [debouncedSearchText] = useDebounce(searchName, 1000)

   useEffect(() => {
      if (debouncedSearchText !== undefined) {
         dispatch(
            SPECIALISTS_THUNK.searchSpecilaist({
               searchName: debouncedSearchText,
            })
         )
      }
   }, [debouncedSearchText])

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="button-container">
               <Typography className="title">Специалисты</Typography>

               <NavLink
                  className="navlink"
                  to={`${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.ADD_NOTE}`}
               >
                  <Button className="add-button">
                     <PlusIcon className="plus-icon" />
                     Добавить специалиста
                  </Button>
               </NavLink>
            </Box>
         </Box>

         <Box className="input-container">
            <StyledInput
               placeholder="Поиск"
               value={searchName}
               onChange={handleSearchChange}
            />
         </Box>

         {isLoading && <Loading />}

         <Box className="table-container">
            <Table columns={SPECIALISTS_COLUMN} data={specialists} />
         </Box>
      </StyledContainer>
   )
}

export default Specialists

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '1.87rem 4.37rem 0',
   backgroundColor: '#F5F5F5',

   '& > .box': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1600px',
      margin: '0 auto',
      paddingBottom: '30px',

      '& .button-container': {
         display: 'flex',
         justifyContent: 'space-between',
      },

      '&  .add-button': {
         fontSize: '11px',
         height: '45px',
         width: '232px',
         fontFamily: 'Manrope',

         '& > div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: '4px',
         },

         '& .plus-icon': {
            marginLeft: '-0.20rem',
         },
      },

      '& .title': {
         fontSize: '1.375rem',
         fontWeight: '400',
         lineHeight: 'normal',
         marginBottom: '1.87rem',
      },

      '& .MuiTabs-scroller > .MuiTabs-indicator': {
         backgroundColor: '#048741 !important',
      },

      '& .route': {
         fontSize: '0.75rem',
         lineHeight: 'normal',
         marginRight: '1.87rem',
         padding: '0rem',
         transition: '0.3s',
         fontWeight: '500',
         color: theme.palette.secondary.LightGrey,
      },

      '& .Mui-selected': {
         transition: '1s',
         color: '#048741 !important',
      },
   },
   '& .table-container': {
      width: '100%',
      borderRadius: '0.375rem',
      bordeRradius: ' 0.375rem',
      backgroundColor: 'white',
      marginTop: '1.25rem',
      padding: '0 0 0 0.60rem',
   },

   '& .input-container': {
      width: '37.5rem ',
      marginTop: '0.1rem',
   },
}))

const StyledInput = styled(SearchInput)(() => ({
   height: '2rem',
   padding: '0 0.3rem',
   display: 'inline-flex',
   justifyContent: 'center',
   width: '100%',
}))
