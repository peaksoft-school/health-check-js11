import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { CloseIcon } from '../../assets/icons/index'

const DeleteTimeSheets = ({
   selectedDate,
   selectedDoctorId,
   intervals,
   removeInterval,
   addInterval,
   handleHourChange,
   handleMinuteChange,
   setIntervals,
}) => {
   const { schedules } = useSelector((state) => state.schedule)

   const selectedDoctor = schedules.find(
      (doctor) => doctor.id === selectedDoctorId
   )

   setIntervals([{ id: 0 }])

   return (
      <Box>
         {selectedDoctor &&
            selectedDoctor.dates.map(
               ({ dateOfConsultation, startTimeOfConsultation }) => {
                  if (dateOfConsultation === selectedDate) {
                     return (
                        <StyledContainer key={dateOfConsultation}>
                           {startTimeOfConsultation.map((startTime) => (
                              <Box component="span" className="time-box">
                                 {startTime.slice(0, '5')}
                                 <CloseIcon className="delete-icon" />
                              </Box>
                           ))}

                           <>
                              {intervals.map((interval, index) => (
                                 <Box
                                    key={interval.id}
                                    className="time-picker-box"
                                 >
                                    <Box className="time-pickers">
                                       <Box
                                          component="input"
                                          type="number"
                                          className="time-picker"
                                          placeholder="00ч"
                                          min={1}
                                          max={23}
                                          onChange={(e) =>
                                             handleHourChange(
                                                e.target.value,
                                                index,
                                                'start'
                                             )
                                          }
                                       />

                                       <Box
                                          component="input"
                                          type="number"
                                          placeholder="00м"
                                          className="time-picker"
                                          min={1}
                                          max={59}
                                          onChange={(e) =>
                                             handleMinuteChange(
                                                e.target.value,
                                                index,
                                                'start'
                                             )
                                          }
                                       />
                                    </Box>

                                    <Typography className="line">-</Typography>

                                    <Box className="time-pickers">
                                       <Box
                                          component="input"
                                          type="number"
                                          className="time-picker"
                                          placeholder="00ч"
                                          min={1}
                                          max={23}
                                          onChange={(e) =>
                                             handleHourChange(
                                                e.target.value,
                                                index,
                                                'end'
                                             )
                                          }
                                       />

                                       <Box
                                          component="input"
                                          type="number"
                                          className="time-picker"
                                          placeholder="00м"
                                          min={1}
                                          max={59}
                                          onChange={(e) =>
                                             handleMinuteChange(
                                                e.target.value,
                                                index,
                                                'end'
                                             )
                                          }
                                       />
                                    </Box>

                                    {index !== 0 && (
                                       <CloseIcon
                                          className="remove-interval"
                                          onClick={() =>
                                             removeInterval(interval.id)
                                          }
                                       />
                                    )}
                                 </Box>
                              ))}

                              <Typography
                                 className={
                                    intervals.length >= 5
                                       ? 'not-allowed-interval'
                                       : 'add-interval'
                                 }
                                 onClick={addInterval}
                              >
                                 - Добавить интервал
                              </Typography>
                           </>
                        </StyledContainer>
                     )
                  }
                  return null
               }
            )}
      </Box>
   )
}

export default DeleteTimeSheets

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   gap: '6px',
   width: '334px',
   flexWrap: 'wrap',

   '& .time-box': {
      border: '1px solid rgb(217, 217, 217)',
      borderRadius: '4px',
      width: '79px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '8px',

      '& .delete-icon': {
         width: '22px',
         height: '22px',
         cursor: 'pointer',

         '& > #close': {
            '& > #Vector': {
               fill: 'red',
            },
         },
      },
   },
}))
