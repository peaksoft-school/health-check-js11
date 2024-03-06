import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box, Typography, styled } from '@mui/material'
import Button from '../../../components/UI/Button'
import { PlusIcon } from '../../../assets/icons'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Table from '../../../components/UI/Table'
import { COLUMNS, SPECIALISTS_COLUMN } from '../../../utils/constants/columns'
import { SPECIALISTS_THUNK } from '../../../store/slices/specialists/specialictsThunk'

const Specialists = () => {
   const dispatch = useDispatch()
   const specialists = useSelector((state) => state.Specialists)

   useEffect(() => {
      dispatch(SPECIALISTS_THUNK.getSpecialists())
   }, [])

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="button-container">
               <Typography className="title">Специалисты</Typography>
               <Button className="add-button">
                  <PlusIcon className="plus-icon" />
                  Добавить специалиста
               </Button>
            </Box>
            <Box className="input-container">
               <StyledInput placeholder="Поиск" />
            </Box>
            <Box className="table-container">
               <Table columns={SPECIALISTS_COLUMN} data={COLUMNS} />
            </Box>
         </Box>
      </StyledContainer>
   )
}
export default Specialists

const StyledContainer = styled(Box)(() => ({
   padding: '1.87rem 4.37rem 0',
   backgroundColor: '#F5F5F5',

   '& >.box': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1600px',
      margin: '0 auto',
      paddingBottom: '30px',

      '& .button-container': {
         display: 'flex',
         justifyContent: 'space-between',
      },
      '& .title': {
         fontSize: '1.375rem',
         fontWeight: '400',
         lineHeight: 'normal',
         marginBottom: '1.87rem',
      },
      '& >.add-button': {
         fontFamily: 'Manrope',
         fontSize: '0.875rem',
         fontStyle: 'normal',
         fontWeight: '600',
         lineHeight: 'normal',
         letterSpacing: '0.02625rem',
         textTransform: 'uppercase',
         display: 'flex',
         height: '2rem',
         padding: '0.625rem 1.5rem 0.625rem 1rem !important',
         alignItems: 'center',
         gap: '0.625rem',
         width: '13.0500rem !important',
         flexShrink: '0',
         '& > .plus-icon': {
            width: '1.125rem',
            height: '1.125rem',
         },
      },
   },
   '& .input-container': {
      width: '37.5rem',
      marginTop: '2.12rem',
   },
   '& .table-container': {
      width: '100%',
      borderRadius: '0.375rem',
      bordeRradius: ' 0.375rem',
      background: 'white',
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
