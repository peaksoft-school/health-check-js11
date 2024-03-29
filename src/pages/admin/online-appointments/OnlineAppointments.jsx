import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Box, Typography, Tab, styled } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Workbook } from 'exceljs'
import { useDebounce } from 'use-debounce'
import { useToggleModal } from '../../../utils/helpers'
import { NoDataImage } from '../../../assets/images'
import { PlusIcon } from '../../../assets/icons'
import { ONLINE_APPOINTMENTS_COLUMN } from '../../../utils/constants/columns'
import { ONLINE_APPOINTMENTS_THUNK } from '../../../store/slices/online-appointments/onlineAppointmentThunk'
import Button from '../../../components/UI/Button'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import Loading from '../../../components/Loading'
import Schedule from '../schedule/Schedule'
import AddSchedule from '../../../components/admin/schedule/AddSchedule'
import Table from '../../../components/UI/Table'

const OnlineAppointments = () => {
   const [tab, setTab] = useState('online-appointments')
   const [searchName, setSearchName] = useState('')

   const { schedules } = useSelector((state) => state.schedule)

   const { isLoading, appointments } = useSelector(
      (state) => state.onlineAppointments
   )
   const { isOpen, onOpenModal, onCloseModal } = useToggleModal('modal')

   const [searchParams, setSearchParams] = useSearchParams()

   const dispatch = useDispatch()

   const memoizedAppointments = useMemo(() => appointments, [appointments])

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
      setTab(newValue)

      searchParams.set('tab', newValue)
      setSearchParams(searchParams)
   }

   useEffect(() => {
      const tabFormUrl = searchParams.get('tab')

      if (tabFormUrl) {
         setTab(tabFormUrl)
      } else {
         setTab('online-appointments')
         searchParams.set('tab', 'online-appointments')
         setSearchParams(searchParams)
      }
   }, [])

   const generateExcel = useCallback(() => {
      const workbook = new Workbook()
      const worksheet = workbook.addWorksheet('Schedule')

      const headerRow = ['ID', 'Full Name', 'Position']

      schedules.forEach((schedule) => {
         schedule.dates.forEach((_, index) => {
            headerRow.push(`Date of Consultation ${index + 1}`)
            headerRow.push(`Day of Week ${index + 1}`)
            headerRow.push(`Time Sheet ${index + 1}`)
         })
      })

      worksheet.addRow(headerRow)

      schedules.forEach((schedule) => {
         const { id, surname, position, dates } = schedule

         const rowData = [id.toString(), surname, position]

         dates.forEach((date) => {
            rowData.push(date.dateOfConsultation)
            rowData.push(date.dayOfWeek)

            const startTime = date.startTimeOfConsultation.join(', ')
            if (startTime.length > 20)
               rowData.push(`${startTime.substring(0, 20)}...`)
            else rowData.push(startTime)
         })

         worksheet.addRow(rowData)
      })

      worksheet.columns.forEach((column) => {
         let maxWidth = 0
         column.eachCell((cell) => {
            const cellWidth = cell.value
               ? cell.value.toString().length * 1.2
               : 10
            maxWidth = Math.max(maxWidth, cellWidth)
         })
         column.width = maxWidth < 10 ? 10 : maxWidth
      })

      workbook.xlsx.writeBuffer().then((buffer) => {
         const blob = new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
         })

         const url = window.URL.createObjectURL(blob)
         const a = document.createElement('a')

         a.href = url
         a.download = 'Schedule.xlsx'
         document.body.appendChild(a)
         a.click()

         window.URL.revokeObjectURL(url)
         document.body.removeChild(a)
      })
   }, [schedules])

   return (
      <StyledContainer>
         <Box className="buttons-container">
            <Typography className="title">Онлайн-запись</Typography>

            {tab === 'online-appointments' ? (
               ''
            ) : (
               <Box className="buttons-box">
                  <Button className="add-button" onClick={onOpenModal}>
                     <PlusIcon /> Добавить запись
                  </Button>

                  {isLoading && <Loading />}

                  <Button
                     variant="secondary"
                     className="export-btn"
                     onClick={generateExcel}
                  >
                     EXPORT TO EXCEL
                  </Button>
               </Box>
            )}
         </Box>

         {isLoading && <Loading />}

         <AddSchedule open={isOpen} onClose={onCloseModal} />

         <Box>
            <TabContext value={tab}>
               <Box className="tabs-container">
                  <TabList onChange={tabsChange}>
                     <Tab
                        label="Онлайн-запись"
                        value="online-appointments"
                        className="route"
                     />

                     <Tab
                        label="Расписание"
                        value="schedules"
                        className="route"
                     />
                  </TabList>
               </Box>

               <TabPanel value="online-appointments" className="tables">
                  <Box className="input-container">
                     <StyledInput
                        placeholder="Поиск"
                        value={searchName}
                        onChange={handleSearchChange}
                     />
                  </Box>

                  <Box className="table-container">
                     {memoizedAppointments.length === 0 ? (
                        <img
                           src={NoDataImage}
                           alt="No Data"
                           className="no-data-image"
                        />
                     ) : (
                        <Table
                           columns={ONLINE_APPOINTMENTS_COLUMN}
                           data={memoizedAppointments}
                        />
                     )}
                  </Box>
               </TabPanel>

               <TabPanel value="schedules" className="tables">
                  <Schedule />
               </TabPanel>
            </TabContext>
         </Box>
      </StyledContainer>
   )
}

export default OnlineAppointments

const StyledContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   maxWidth: '1600px',
   margin: '0 auto',
   minHeight: '100vh',

   '& .buttons-container': {
      display: 'flex',
      justifyContent: 'space-between',

      '& .title': {
         fontSize: '1.375rem',
         fontWeight: '400',
         lineHeight: 'normal',
         marginBottom: '1.87rem',
      },

      '& .buttons-box': {
         display: 'flex',
         gap: '30px',
         alignItems: 'center',

         '& .export-btn': {
            borderRadius: '4px',
            padding: '8px 20px 9px 20px',
            width: '168px',
            height: '43px',

            '&:hover': {
               width: '168px',
               padding: '8px 20px 9px 20px',
               border: 'none',
            },
         },

         '& .add-button': {
            fontFamily: 'Manrope',
            fontSize: '0.875rem',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal',
            letterSpacing: '0.02625rem',
            textTransform: 'uppercase',
            height: '2.75rem',
            padding: '0.625rem 1.5rem 0.625rem 1rem !important',
            width: '13.0625rem !important',
            flexShrink: '0',

            '& > div': {
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               width: '100%',
               gap: '4px',
            },

            '& > .plus-icon': {
               width: '1.125rem',
               padding: '0.625rem',
               height: '1.125rem',
            },
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
      transition: 'all 0.3s linear',
      fontWeight: '500',
      color: theme.palette.secondary.LightGrey,
   },

   '& .Mui-selected': {
      transition: 'all 1s linear',
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

      '& .no-data-image': {
         width: '1300px',
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
