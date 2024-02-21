import { Box, Typography, Tab, styled } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import Table from '../../../components/UI/Table'
import { ONLINE_APPOINTMENTS_COLUMN } from '../../../utils/constants'
import Button from '../../../components/UI/Button'
import { PlusIcon } from '../../../assets/icons'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Loading from '../../../components/UI/Loading'
import {
   getAppointments,
   searchAppointments,
} from '../../../store/slices/appointmentThunk'

const OnlineAppointments = () => {
   const [value, setValue] = useState('1')
   const [searchName, setSearchName] = useState('')
   const [showAddButton, setShowAddButton] = useState(true)
   const [searchResults, setSearchResults] = useState([])

   const dispatch = useDispatch()

   const { isLoading, error } = useSelector((state) => state.appointmentsAdmin)

   const handleSearchChange = (e) => {
      setSearchName(e.target.value)
   }

   const [debouncedSearchText] = useDebounce(searchName, 1000)

   useEffect(() => {
      const fetchData = async () => {
         try {
            dispatch(getAppointments())
         } catch (error) {
            console.error('Error fetching appointments:', error)
         }
      }
      fetchData()
   }, [dispatch])

   useEffect(() => {
      if (debouncedSearchText !== undefined) {
         dispatch(
            searchAppointments({
               searchName: debouncedSearchText,
               otherParam: 'name',
            })
         ).then((action) => {
            const results = action.payload
            setSearchResults(results)
         })
      }
   }, [debouncedSearchText, dispatch])

   const handleChange = (event, newValue) => {
      setValue(newValue)
      setShowAddButton(newValue === '1')
   }

   console.log(searchResults)

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="button-container">
               <Typography className="title">Онлайн-запись</Typography>

               {showAddButton && (
                  <Button className="add-button">
                     <PlusIcon className="plus-icon" /> Добавить запись
                  </Button>
               )}

               {!showAddButton && (
                  <Button className="different-button">some</Button>
               )}
            </Box>

            <Box sx={{ width: '100%', typography: 'body1' }}>
               <TabContext value={value}>
                  <Box className="tabs-container">
                     <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                     >
                        <Tab
                           label="Онлайн-запись"
                           value="1"
                           className="route"
                        />
                        <Tab label="Расписание" value="2" className="route" />
                     </TabList>
                  </Box>

                  <TabPanel value="1" className="tables">
                     <Box className="input-container">
                        <StyledInput
                           placeholder="Поиск"
                           value={searchName}
                           onChange={handleSearchChange}
                        />
                     </Box>

                     {isLoading && <Loading />}
                     {error && <p>Error: {error.message}</p>}

                     <Box className="table-container">
                        <Table
                           columns={ONLINE_APPOINTMENTS_COLUMN}
                           data={searchResults}
                        />
                     </Box>
                  </TabPanel>

                  <TabPanel value="2" className="tables">
                     Raspisanie
                  </TabPanel>
               </TabContext>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default OnlineAppointments

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

         '& .title': {
            fontSize: '1.375rem',
            fontWeight: '400',
            lineHeight: 'normal',
            marginBottom: '1.87rem',
         },

         '& > .add-button': {
            fontFamily: 'Manrope',
            fontSize: '0.875rem',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal',
            letterSpacing: '0.02625rem',
            textTransform: 'uppercase',
            display: 'flex',
            height: '2.75rem',
            padding: '0.625rem 1.5rem 0.625rem 1rem !important',
            alignItems: 'center',
            gap: '0.625rem',
            width: '13.0625rem !important',
            flexShrink: '0',

            '& > .plus-icon': {
               width: '1.125rem',
               height: '1.125rem',
            },
         },
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

      '& .tables': {
         padding: '0rem',
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
   },
}))

const StyledInput = styled(SearchInput)(() => ({
   height: '2.5rem',
   padding: '0rem 0.3rem',
   display: 'inline-flex',
   justifyContent: 'center',
   fontFamily: 'Manrope',
   width: '100%',
}))
