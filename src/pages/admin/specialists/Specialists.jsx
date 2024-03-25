import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { useDebounce } from 'use-debounce'
import Table from '../../../components/UI/Table'
import Button from '../../../components/UI/Button'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Loading from '../../../components/Loading'
import { SPECIALISTS_COLUMN } from '../../../utils/constants/columns'
import { SPECIALISTS_THUNK } from '../../../store/slices/specialistsSlice/specialictsThunk'
import { PlusIcon } from '../../../assets/icons'

const Specialists = () => {
   const { isLoading, specialists } = useSelector((state) => state.specialists)

   const [search, setSearch] = useState('')

   const dispatch = useDispatch()

   const [debouncedSearch] = useDebounce(search, 1000)

   const memoizedSpecialists = useMemo(() => specialists, [specialists])

   useEffect(() => {
      dispatch(SPECIALISTS_THUNK.getSpecialists())
   }, [])

   useEffect(() => {
      if (debouncedSearch !== undefined) {
         dispatch(
            SPECIALISTS_THUNK.searchSpecilaist({
               searchName: debouncedSearch,
            })
         )
      }
   }, [debouncedSearch])

   const changeSearchHandler = (e) => setSearch(e.target.value)

   return (
      <StyledContainer>
         <Box className="button-container">
            <Typography className="title">Специалисты</Typography>

            <Button className="add-button">
               <PlusIcon className="plus-icon" />
               ДОБАВИТЬ СПЕЦИАЛИСТА
            </Button>
         </Box>

         <Box className="input-container">
            <StyledInput
               placeholder="Поиск"
               value={search}
               onChange={changeSearchHandler}
            />
         </Box>

         {isLoading && <Loading />}

         <Box className="table-container">
            <Table columns={SPECIALISTS_COLUMN} data={memoizedSpecialists} />
         </Box>
      </StyledContainer>
   )
}

export default Specialists

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   maxWidth: '1600px',
   margin: '0 auto',

   '& > .button-container': {
      display: 'flex',
      justifyContent: 'space-between',

      '& > .title': {
         fontSize: '1.375rem',
         fontWeight: '400',
         lineHeight: 'normal',
         marginBottom: '1.87rem',
      },

      '& > a > .add-button': {
         fontFamily: 'Manrope',
         fontSize: '0.875rem',
         fontStyle: 'normal',
         fontWeight: '600',
         lineHeight: 'normal',
         letterSpacing: '0.02625rem',
         height: '2.75rem',
         padding: '0.625rem 1.5rem 0.625rem 1rem !important',
         flexShrink: '0',

         '& > div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: '10px',
         },
      },
   },

   '& > .input-container': {
      width: '37.5rem ',
      marginTop: '0.1rem',
   },

   '& > .table-container': {
      width: '100%',
      borderRadius: '0.375rem',
      backgroundColor: 'white',
      marginTop: '1.25rem',
   },
}))

const StyledInput = styled(SearchInput)(() => ({
   height: '2.5rem',
   padding: '0rem 0.3rem',
   display: 'inline-flex',
   justifyContent: 'center',
   width: '100%',
}))
