import { Box, Typography, Tab, styled } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import Table from '../../../components/UI/Table'
import Button from '../../../components/UI/Button'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import AddSchedule from '../../../components/schedule/AddSchedule'
import Loading from '../../../components/Loading'
import { PlusIcon } from '../../../assets/icons'
import { ONLINE_APPOINTMENTS_COLUMN } from '../../../utils/constants/columns'
import { ONLINE_APPOINTMENTS_THUNK } from '../../../store/slices/online-appointments/onlineAppointmentThunk'

const OnlineAppointments = () => {
   const [value, setValue] = useState('1')
   const [searchName, setSearchName] = useState('')
   const [showAddButton, setShowAddButton] = useState(true)
   const [openModal, setOpenModal] = useState(false)

   const dispatch = useDispatch()

   const { isLoading, appointments } = useSelector(
      (state) => state.onlineAppointments
   )

   const toggleModal = () => setOpenModal((prev) => !prev)

   const handleSearchChange = (e) => setSearchName(e.target.value)

   const [debouncedSearchText] = useDebounce(searchName, 1000)

   useEffect(() => {
      if (debouncedSearchText !== undefined) {
         dispatch(
            ONLINE_APPOINTMENTS_THUNK.searchAppointment({
               searchName: debouncedSearchText,
            })
         )
      }
   }, [debouncedSearchText])

   useEffect(() => {
      dispatch(ONLINE_APPOINTMENTS_THUNK.getAppointments())
   }, [])

   const tabsChange = (_, newValue) => {
      setValue(newValue)
      setShowAddButton(newValue === '1')
   }

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="button-container">
               <Typography className="title">Онлайн-запись</Typography>

               {showAddButton && (
                  <Button className="add-button" onClick={toggleModal}>
                     <PlusIcon className="plus-icon" />
                     Добавить запись
                  </Button>
               )}

               {isLoading && <Loading />}

               {!showAddButton && (
                  <Button className="different-button">some</Button>
               )}
            </Box>

            <AddSchedule open={openModal} onClose={toggleModal} />

            <Box>
               <TabContext value={value}>
                  <Box className="tabs-container">
                     <TabList
                        onChange={tabsChange}
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

                     <Box className="table-container">
                        <Table
                           columns={ONLINE_APPOINTMENTS_COLUMN}
                           data={appointments}
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
            alignItems: 'center',
            height: '2.75rem',
            padding: '0.625rem 1.5rem 0.625rem 1rem !important',
            gap: '0.625rem',
            width: '13.0625rem !important',
            flexShrink: '0',

            '& > .plus-icon': {
               width: '1.125rem',
               padding: '0.625rem',
               height: '1.125rem',
            },

            '& > div': {
               display: 'flex',
               alignItems: 'center',
               gap: '4px',
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
   width: '100%',
}))
