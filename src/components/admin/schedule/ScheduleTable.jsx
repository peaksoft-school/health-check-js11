import { useEffect, useState } from 'react'
import { Box, ButtonBase, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import {
   generateDateRange,
   generateFreeTimes,
} from '../../../utils/helpers/index'
import Loading from '../../Loading'
import { SCHEDULE_THUNK } from '../../../store/slices/schedule/scheduleThunk'
import ChangeDay from './ChangeDay'
import DatePicker from '../../UI/DatePicker'
import { ProfileIcon } from '../../../assets/icons'

const ScheduleTable = () => {
   const { schedules, isLoading } = useSelector((state) => state.schedule)

   const [startDate, setStartDate] = useState(dayjs())
   const [endDate, setEndDate] = useState(dayjs().subtract(11, 'day'))

   const [lastClicked, setLastClicked] = useState({ id: null, date: null })

   const [open, setOpen] = useState(false)

   const [timeRanges, setTimeRanges] = useState([
      { startHour: 0, startMinute: 0, endHour: 0, endMinute: 0 },
   ])

   const [selectedDoctorId, setSelectedDoctorId] = useState(null)
   const [clickedDate, setClickedDate] = useState(null)
   const [intervals, setIntervals] = useState([{ id: 1 }])
   const [installDisabled, setInstallDisabled] = useState(false)

   const [isSaveDisabled, setIsSaveDisabled] = useState(true)

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

   const handleMinuteChange = (value, index, type) => {
      const paddedValue = value.toString().padStart(2, '0')
      const updatedTimeRanges = [...timeRanges]

      updatedTimeRanges[index][`${type}Minute`] = paddedValue

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

   const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

   const dateToday = dayjs()
   const dateEnd = dayjs()

   const handleDateChange = (event, type) => {
      if (type === 'start') {
         setStartDate(event)
      } else {
         setEndDate(event)
      }
   }

   useEffect(() => {
      setStartDate(dayjs())

      setEndDate(dayjs().add(11, 'day'))
   }, [])

   useEffect(() => {
      if (lastClicked.id === null && lastClicked.date === null) {
         setInstallDisabled(true)
      }
   }, [lastClicked])

   const handleTdClick = (id, date, dates, i) => {
      if (id === lastClicked.id && date === lastClicked.date) {
         setLastClicked({ id: null, date: null })
      } else {
         setLastClicked({ id, date })
         setSelectedDoctorId(id)
         setClickedDate(date)

         const checkedTd =
            dates.find((_, index) => index === i).startTimeOfConsultation
               .length > 0
         setInstallDisabled(checkedTd)
      }
   }

   const buttonClassName =
      installDisabled === true ? 'button-disabled' : 'buttons'

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
                  startDate={startDate}
                  endDate={endDate}
                  daysOfWeek={daysOfWeek}
                  isSaveDisabled={isSaveDisabled}
                  timeRanges={timeRanges}
                  setIsSaveDisabled={setIsSaveDisabled}
               />

               <ButtonBase
                  className={buttonClassName}
                  onClick={savePatternTimeSheet}
                  disabled={installDisabled}
               >
                  Установить по шаблону
               </ButtonBase>
            </Box>

            <Box className="date-picker-box">
               <DatePicker
                  onChange={(e) => handleDateChange(e, 'start')}
                  minDate={dateToday}
               />
               -
               <DatePicker
                  minDate={dateEnd}
                  onChange={(e) => handleDateChange(e, 'end')}
               />
            </Box>
         </Box>

         <Box className="schedule-table-container">
            <table className="table">
               <thead>
                  <tr>
                     <th className="header-specialist">СПЕЦИАЛИСТЫ</th>

                     {generateDateRange(startDate, endDate, daysOfWeek).map(
                        ({ dayOfWeek, date, monthText }) => (
                           <th
                              className="header-dates th"
                              key={(monthText, date)}
                           >
                              {dayOfWeek}
                              <Box component="br" />
                              {date} {monthText}
                           </th>
                        )
                     )}
                  </tr>
               </thead>

               {isLoading && <Loading />}

               <tbody>
                  {schedules.map(({ image, surname, position, dates, id }) => (
                     <tr key={id}>
                        <td className="specialist">
                           {image === null || image === undefined ? (
                              <ProfileIcon className="image" alt="doctor-img" />
                           ) : (
                              <img
                                 src={image}
                                 className="image"
                                 alt="doctor-img"
                              />
                           )}

                           <Typography className="surname">
                              {surname}
                           </Typography>

                           <Typography className="position">
                              {position}
                           </Typography>
                        </td>

                        {generateDateRange(startDate, endDate, daysOfWeek).map(
                           ({ dayOfWeek, date, monthNumber, year }, i) => {
                              const currentDate = `${year}-${monthNumber}-${date}`
                              return (
                                 <td
                                    key={`${id}-${dayOfWeek}-${date}-${monthNumber}`}
                                    className="schedule-cell"
                                    onClick={() =>
                                       handleTdClick(id, currentDate, dates, i)
                                    }
                                 >
                                    <Box
                                       className={`${
                                          isLastClicked(id, currentDate)
                                             ? 'highlighted'
                                             : 'un-highlighted'
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
                                 </td>
                              )
                           }
                        )}
                     </tr>
                  ))}
               </tbody>
            </table>
         </Box>
      </StyledContainer>
   )
}

export default ScheduleTable

const StyledContainer = styled(Box)(({ theme }) => ({
   backgroundColor: theme.palette.primary.main,
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

      '&::-webkit-scrollbar': {
         height: '15px',
      },

      '&::-webkit-scrollbar-thumb': {
         backgroundColor: '#92919183',
         borderRadius: '10px',
      },
   },

   '& .table': {
      border: `2px solid ${theme.palette.secondary.main}`,
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
         border: `2px solid ${theme.palette.secondary.main}`,
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
         border: `2px solid ${theme.palette.secondary.main}`,
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
            contain: 'paint',
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
            color: theme.palette.secondary.lightGrey,
         },
      },

      '& .schedule-cell': {
         border: `2px solid ${theme.palette.secondary.main}`,
         minWidth: '6.625rem',
         cursor: 'pointer',

         '& .free-time-container': {
            backgroundColor: theme.palette.tertiary.main,
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: '8px',

            '& .free-time': {
               color: '#1F6ED4',
               fontWeight: '400',
               fontStyle: 'italic',
               fontSize: '12px',
               width: '100%',
            },

            '& .not-free-time': {
               color: '#1f6dd486',
               fontWeight: '400',
               fontStyle: 'italic',
               fontSize: '12px',
               width: '100%',
               textDecorationLine: 'line-through',
            },
         },
      },

      '& .highlighted': {
         transition: '0.2s',
         width: '100%',
         height: '9.875rem',
         boxShadow: '0px 0px 5px 1px',
         overflow: 'auto',
         padding: '3px',

         '& .free-time-container': {
            paddingLeft: '12px',
            transition: '0.2s',
         },

         '&::-webkit-scrollbar': {
            width: '5px',
         },

         '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#d5d5d5',
            borderRadius: '5px',
         },
      },

      '& .un-highlighted': {
         height: '9.875rem',
         transition: '0.2s',
         width: '100%',
         overflow: 'hidden',
         padding: '6px',

         '& .free-time-container': {
            transition: '0.2s',
         },
      },
   },
}))
