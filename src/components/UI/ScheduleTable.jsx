import { useEffect, useState } from 'react'
import { Box, Button, ButtonBase, Typography, styled } from '@mui/material'
import { addDays, format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading'
import { SCHEDULE_THUNK } from '../../store/slices/schedule/scheduleThunk'
import ChangeDay from '../schedule/ChangeDay'

const TableSchedule = () => {
   const { schedules, isLoading } = useSelector((state) => state.schedule)

   const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'))
   const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'))
   const [lastClicked, setLastClicked] = useState({ id: null, date: null })

   const [open, setOpen] = useState(false)

   const [timeRanges, setTimeRanges] = useState([
      { startHour: 0, startMinute: 0, endHour: 0, endMinute: 0 },
   ])

   const [selectedDoctorId, setSelectedDoctorId] = useState(null)
   const [clickedDate, setClickedDate] = useState(null)
   const [intervals, setIntervals] = useState([{ id: 1 }])

   const dispatch = useDispatch()

   const resetTimeRangesAndIntervals = () => {
      setIntervals([{ id: 1 }])

      setTimeRanges([
         { startHour: 0, startMinute: 0, endHour: 0, endMinute: 0 },
      ])

      const inputElements = document.querySelectorAll('.time-picker')
      inputElements.forEach((input) => {
         input.value = ''
      })
   }

   const updateIntervals = (newIntervals) => {
      setIntervals(newIntervals)
   }

   const openModal = () => setOpen(true)

   const handleClose = () => {
      resetTimeRangesAndIntervals()
      setOpen(false)
   }

   const handleHourChange = (value, index, type) => {
      const paddedValue = value.toString().padStart(2, '0')
      const updatedTimeRanges = [...timeRanges]

      updatedTimeRanges[index][`${type}Hour`] = paddedValue

      setTimeRanges(updatedTimeRanges)
   }

   const addInterval = () => {
      if (intervals.length < 5) {
         const newIntervalId = intervals.length + 1
         setIntervals([...intervals, { id: newIntervalId }])

         setTimeRanges([
            ...timeRanges,
            { startHour: 0, startMinute: 0, endHour: 0, endMinute: 0 },
         ])
      }
   }

   const removeInterval = (id) => {
      const updatedIntervals = intervals.filter(
         (interval) => interval.id !== id
      )

      setIntervals(updatedIntervals)
   }

   const handleMinuteChange = (value, index, type) => {
      const paddedValue = value.toString().padStart(2, '0')
      const updatedTimeRanges = [...timeRanges]

      updatedTimeRanges[index][`${type}Minute`] = paddedValue

      setTimeRanges(updatedTimeRanges)
   }

   const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

   const handleDateChange = (event, type) => {
      const selectedDate = event.target.value

      if (type === 'start') {
         setStartDate(selectedDate)
      } else {
         setEndDate(selectedDate)
      }
   }

   useEffect(() => {
      const today = new Date()
      const defaultEndDate = addDays(today, 11)

      setStartDate(format(today, 'yyyy-MM-dd'))
      setEndDate(format(defaultEndDate, 'yyyy-MM-dd'))
   }, [])

   const getRussianMonthName = (monthNumber) => {
      const russianMonthNames = [
         'Январь',
         'Февраль',
         'Март',
         'Апрель',
         'Май',
         'Июнь',
         'Июль',
         'Август',
         'Сентябрь',
         'Октябрь',
         'Ноябрь',
         'Декабрь',
      ]

      return russianMonthNames[monthNumber]
   }

   const generateDateRange = () => {
      if (!startDate || !endDate) {
         return []
      }

      const start = new Date(startDate)
      const end = new Date(endDate)
      const dateRange = []

      while (start <= end) {
         const dayOfWeek = daysOfWeek[start.getDay()]

         const date = String(start.getDate()).padStart(2, '0')
         const monthNumber = String(start.getMonth() + 1).padStart(2, '0')
         const monthText = getRussianMonthName(start.getMonth())
         const year = start.getFullYear()

         dateRange.push({ dayOfWeek, date, monthNumber, monthText, year })
         start.setDate(start.getDate() + 1)
      }

      return dateRange
   }

   const generateFreeTimes = (startTimeOfConsultation) => {
      if (!startTimeOfConsultation || startTimeOfConsultation.length === 0) {
         return []
      }

      const timeRanges = startTimeOfConsultation.map((timeRange) => {
         const [startTime, endTime] = timeRange.split(' - ')
         const trimmedStartTime = startTime.slice(0, -3)
         const trimmedEndTime = endTime.replace(/-f$/, '').slice(0, -3)

         return `${trimmedStartTime} - ${trimmedEndTime}`
      })

      return timeRanges.map((formattedTime) => (
         <Typography key={formattedTime} className="free-time">
            {formattedTime}
         </Typography>
      ))
   }

   const handleTdClick = (id, date) => {
      if (id === lastClicked.id && date === lastClicked.date) {
         setLastClicked({ id: null, date: null })
      } else {
         setLastClicked({ id, date })
         setSelectedDoctorId(id)
         setClickedDate(date)
      }
   }

   const savePatternTimeSheet = () => {
      const { id, date } = lastClicked

      if (id && date) {
         dispatch(
            SCHEDULE_THUNK.savePatternTimeSheet({
               doctorId: id,
               dateOfConsultation: date,
            })
         )

         resetTimeRangesAndIntervals()
      } else {
         console.error('No td was clicked')
      }
   }

   const isLastClicked = (currentId, currentDate) => {
      return currentId === lastClicked.id && currentDate === lastClicked.date
   }

   const updateTimeSheetDoctor = () => {
      const { id, date } = lastClicked

      if (id && date) {
         dispatch(
            SCHEDULE_THUNK.updateTimeSheetDoctor({
               doctorId: id,
               date,
               timeRanges,
            })
         )
      } else {
         console.error('No td was clicked')
      }
      handleClose()
   }

   const deleteTimeSheet = (startTime) => {
      const { id, date } = lastClicked

      if (id && date) {
         dispatch(
            SCHEDULE_THUNK.deleteTimeSheets({
               doctorId: id,
               date,
               timeRanges: [{ startTime }],
            })
         )
      } else {
         console.error('No td was clicked')
      }
   }

   return (
      <StyledContainer>
         <Box className="action-container">
            <Box className="action-container-box">
               <ChangeDay
                  updateTimeSheetDoctor={updateTimeSheetDoctor}
                  handleMinuteChange={handleMinuteChange}
                  handleHourChange={handleHourChange}
                  openModal={openModal}
                  handleClose={handleClose}
                  open={open}
                  intervals={intervals}
                  addInterval={addInterval}
                  removeInterval={removeInterval}
                  selectedDoctorId={selectedDoctorId}
                  generateDateRange={generateDateRange}
                  clickedDate={clickedDate}
                  updateIntervals={updateIntervals}
                  setIntervals={setIntervals}
                  deleteTimeSheet={deleteTimeSheet}
                  lastClicked={lastClicked}
               />

               <ButtonBase
                  className={
                     lastClicked.id === null || lastClicked.date === null
                        ? 'button-disabled'
                        : 'buttons'
                  }
                  onClick={savePatternTimeSheet}
                  disabled={
                     lastClicked.id === null || lastClicked.date === null
                  }
               >
                  Установить по шаблону
               </ButtonBase>
            </Box>

            <Box className="date-picker-box">
               <input
                  className="date-picker"
                  type="date"
                  placeholder="От"
                  value={startDate}
                  onChange={(e) => handleDateChange(e, 'start')}
               />
               -
               <input
                  className="date-picker"
                  type="date"
                  placeholder="До"
                  value={endDate}
                  onChange={(e) => handleDateChange(e, 'end')}
               />
            </Box>
         </Box>

         <Box className="schedule-table-container">
            <Box component="table" className="table">
               <Box component="thead">
                  <Box component="tr">
                     <Box component="th" className="header-specialist">
                        СПЕЦИАЛИСТЫ
                     </Box>

                     {generateDateRange().map(
                        ({ dayOfWeek, date, monthText }) => (
                           <Box
                              component="th"
                              className="header-dates th"
                              key={(monthText, date)}
                           >
                              {dayOfWeek}
                              <Box component="br" />
                              {date} {monthText}
                           </Box>
                        )
                     )}
                  </Box>
               </Box>

               {isLoading && <Loading />}

               <Box component="tbody">
                  {schedules.map(({ image, surname, position, dates, id }) => (
                     <Box component="tr" key={id}>
                        <Box component="td" className="specialist">
                           <Box
                              component="img"
                              src={image}
                              alt="imag"
                              className="image"
                           />

                           <Typography className="surname">
                              {surname}
                           </Typography>

                           <Typography className="position">
                              {position}
                           </Typography>
                        </Box>

                        {generateDateRange().map(
                           ({ dayOfWeek, date, monthNumber, year }) => {
                              const currentDate = `${year}-${monthNumber}-${date}`
                              return (
                                 <Box
                                    component="td"
                                    key={`${id}-${dayOfWeek}-${date}-${monthNumber}`}
                                    className="schedule-cell"
                                    onClick={() =>
                                       handleTdClick(id, currentDate)
                                    }
                                 >
                                    <Box
                                       className={`${
                                          isLastClicked(id, currentDate)
                                             ? 'highlighted'
                                             : 'unHighlighted'
                                       }`}
                                    >
                                       <Box className="free-time-container">
                                          {dates.map(
                                             ({
                                                dateOfConsultation,
                                                startTimeOfConsultation,
                                             }) => {
                                                const [cYear, cMonth, cDay] =
                                                   dateOfConsultation.split('-')
                                                if (
                                                   parseInt(year, 10) ===
                                                      parseInt(cYear, 10) &&
                                                   parseInt(monthNumber, 10) ===
                                                      parseInt(cMonth, 10) &&
                                                   parseInt(date, 10) ===
                                                      parseInt(cDay, 10)
                                                ) {
                                                   return generateFreeTimes(
                                                      startTimeOfConsultation
                                                   )
                                                }
                                                return null
                                             }
                                          )}
                                       </Box>
                                    </Box>
                                 </Box>
                              )
                           }
                        )}
                     </Box>
                  ))}
               </Box>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default TableSchedule

const StyledContainer = styled(Box)(() => ({
   backgroundColor: 'white',
   borderRadius: '6px',
   paddingBottom: '50px',
   maxWidth: '1379px',

   '& .action-container': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',

      '& .action-container-box': {
         display: 'flex',
      },

      '& .buttons': {
         backgroundColor: 'rgb(224, 226, 231)',
         padding: '8px 20px 9px 20px',
         color: 'rgb(77, 78, 81)',
         fontWeight: '400',
         fontSize: '14px',
         borderRadius: '4px',
         transition: '0.2s',
      },

      '& .button-disabled': {
         cursor: 'not-allowed',
         backgroundColor: 'rgb(224, 226, 231)',
         padding: '8px 20px 9px 20px',
         color: 'rgba(149, 151, 159, 0.695)',
         fontWeight: '400',
         fontSize: '14px',
         borderRadius: '4px',
         transition: '0.2s',
      },

      '& .date-picker-box': {
         display: 'flex',
         gap: '8px',
         alignItems: 'center',

         '& .date-picker': {
            padding: '8px 18px',
            borderRadius: '6px',
            border: '1px solid rgb(189, 189, 189)',
            fontSize: '14px',
            fontWeight: '500',
         },
      },
   },

   '& .schedule-table-container': {
      overflowX: 'auto',
      boxShadow: '0px 0px 12px 0.1px#7a7a7a',

      '& ::-webkit-scrollbar-thumb': {
         borderRadius: '5px',
         backgroundColor: '#843465',
      },
   },

   '& .table': {
      border: '2px solid #D9D9D9',
      borderCollapse: 'collapse',
      maxWidth: '86.188rem',
      width: '1379px',

      '& .header-specialist': {
         display: 'flex',
         justifyContent: 'flex-start',
         alignItems: 'center',
         fontSize: '12px',
         fontWeight: '600',
         lineHeight: '16px',
         letterSpacing: '0.02em',
         height: '44px',
         paddingLeft: '12px',
         width: '11.25rem',
      },

      '& .th': {
         border: '2px solid #D9D9D9',
         textAlign: 'start',
         paddingLeft: '11.78px',
         width: '6.625rem !important',
      },

      '& .header-dates': {
         fontWeight: '600',
         fontSize: '12px',
         letterSpacing: '0.02em',
         lineHeight: '16.39px',
         width: '6.625rem !important',
      },

      '& tbody > tr': {
         border: '2px solid #D9D9D9',
      },

      '& .specialist': {
         height: '9.875rem',
         display: 'flex',
         alignItems: 'center',
         flexDirection: 'column',
         paddingTop: '19px',
         width: '11.25rem',

         '& > .image': {
            width: '46px',
            height: '46px',
            marginBottom: '6px',
            borderRadius: '50%',
         },

         '& > .surname': {
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '19.12px',
         },

         '& > .position': {
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '16.39px',
            color: '#959595',
         },
      },

      '& .schedule-cell': {
         border: '2px solid #D9D9D9',
         minWidth: '6.625rem',
         cursor: 'pointer',

         '& .free-time-container': {
            borderLeft: '3px solid #1F6ED4',
            backgroundColor: '#DBEBFF',

            '& .free-time': {
               color: '#1F6ED4',
               fontWeight: '400',
               fontStyle: 'italic',
               fontSize: '12px',
               width: '100%',
               marginLeft: '6px',
            },
         },
      },

      '& .highlighted': {
         transition: '0.2s',
         width: '100%',
         height: '9.875rem',
         padding: '6px',
         boxShadow: '0px 0px 5px 1px',
      },

      '& .unHighlighted': {
         height: '9.875rem',
         transition: '0.2s',
         width: '100%',
         padding: '6px',
      },
   },
}))
