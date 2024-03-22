import { Box, ButtonBase, Typography, styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { CloseIcon } from '../../../assets/icons'
import { handleKeyPress } from '../../../utils/helpers'
import Modal from '../../UI/Modal'
import Button from '../../UI/Button'
import DeleteTimeSheets from './DeleteTimeSheets'

const ChangeDay = ({
   handleHourChange,
   handleMinuteChange,
   updateTimeSheetDoctor,
   openModal,
   handleClose,
   open,
   intervals,
   removeInterval,
   addInterval,
   selectedDoctorId,
   generateDateRange,
   clickedDate,
   deleteTimeSheet,
   setIntervals,
   lastClicked,
   endDate,
   isSaveDisabled,
   startDate,
   setIsSaveDisabled,
   timeRanges,
   daysOfWeek,
}) => {
   const { schedules } = useSelector((state) => state.schedule)

   const selectedDoctor = schedules.find(
      (doctor) => doctor.id === selectedDoctorId
   )

   const clickedDateObject = generateDateRange(
      startDate,
      endDate,
      daysOfWeek
   ).find(({ date, monthText }) => {
      if (clickedDate) {
         return date === clickedDate.split('-')[2] && monthText
      }
      return false
   })

   const isTimePickerBoxVisible =
      selectedDoctor &&
      clickedDateObject &&
      selectedDoctor.dates &&
      selectedDoctor.dates.some(
         ({ dateOfConsultation, startTimeOfConsultation }) =>
            dateOfConsultation === clickedDate &&
            startTimeOfConsultation &&
            startTimeOfConsultation.length > 0
      )

   useEffect(() => {
      const isSaveDisabledd = timeRanges.some(
         (range) =>
            range.startHour < 1 ||
            range.startMinute < 1 ||
            range.endHour < 1 ||
            range.endMinute < 1
      )
      setIsSaveDisabled(isSaveDisabledd)
   }, [timeRanges])

   const isButtonDisabled = lastClicked.id === null || lastClicked.date === null
   const buttonClassName = isButtonDisabled ? 'disabled-button' : ''

   return (
      <StyledContainer>
         <StyledButton
            onClick={openModal}
            disabled={isButtonDisabled}
            className={buttonClassName}
         >
            Изменить шаблон
         </StyledButton>

         <Modal handleClose={handleClose} open={open}>
            <StyledModalContainer className="modal-container">
               <Typography variant="h5" className="modal-title">
                  Изменить шаблон
               </Typography>

               <Box component="form" className="datas-container">
                  <Box className="datas">
                     <Box className="data department">
                        <Typography className="data-title department">
                           Отделение:
                        </Typography>

                        <Typography className="data-value">
                           {selectedDoctor?.position}
                        </Typography>
                     </Box>

                     <Box className="data">
                        <Typography className="data-title">
                           Специалист:
                        </Typography>

                        <Typography className="data-value">
                           {selectedDoctor?.surname}
                        </Typography>
                     </Box>

                     <Box className="data">
                        <Typography className="data-title date">
                           Дата:
                        </Typography>

                        <Typography className="data-value">
                           {clickedDateObject
                              ? `${clickedDateObject.date} ${clickedDateObject.monthText} ${clickedDateObject.year}`
                              : ''}
                        </Typography>
                     </Box>
                  </Box>

                  <Box className="time-picker-container">
                     <Typography className="data-title">График:</Typography>

                     <Box className="time-container">
                        {isTimePickerBoxVisible ? (
                           <DeleteTimeSheets
                              selectedDate={clickedDate}
                              selectedDoctorId={selectedDoctorId}
                              intervals={intervals}
                              addInterval={addInterval}
                              handleMinuteChange={handleMinuteChange}
                              handleHourChange={handleHourChange}
                              setIntervals={setIntervals}
                              removeInterval={removeInterval}
                              deleteTimeSheet={deleteTimeSheet}
                              handleKeyPress={handleKeyPress}
                           />
                        ) : (
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
                                          onKeyPress={handleKeyPress}
                                          maxLength={2}
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
                                          onKeyPress={handleKeyPress}
                                          maxLength={2}
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
                                          onKeyPress={handleKeyPress}
                                          maxLength={2}
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
                                          onKeyPress={handleKeyPress}
                                          maxLength={2}
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
                        )}
                     </Box>
                  </Box>
               </Box>

               <Box className="modal-buttons-conainer">
                  <Button
                     variant="grey"
                     className="modal-buttons"
                     onClick={handleClose}
                  >
                     Отменить
                  </Button>

                  <Button
                     className={
                        isSaveDisabled === false
                           ? 'modal-buttons'
                           : 'disabled-modal-buttons'
                     }
                     onClick={updateTimeSheetDoctor}
                     disabled={isSaveDisabled}
                  >
                     Сохранить
                  </Button>
               </Box>
            </StyledModalContainer>
         </Modal>
      </StyledContainer>
   )
}
export default ChangeDay

const StyledContainer = styled(Box)(() => ({
   '& .disabled-button': {
      cursor: 'not-allowed',
      backgroundColor: 'rgb(224, 226, 231)',
      padding: '8px 20px 9px 20px',
      color: 'rgba(149, 151, 159, 0.695)',
      fontWeight: '400',
      fontSize: '14px',
      borderRadius: '4px',
      transition: '0.2s',
   },
}))

const StyledButton = styled(ButtonBase)(() => ({
   backgroundColor: 'rgb(224, 226, 231)',
   padding: '8px 20px 9px 20px',
   color: 'rgb(77, 78, 81)',
   fontWeight: '400',
   fontSize: '14px',
   borderRadius: '4px',
   marginRight: '10px',
   height: '100%',
}))

const StyledModalContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   flexDirection: 'column',
   width: '31.563rem',
   marginBottom: '20px',

   '& .modal-title': {
      fontWeight: '500',
      fontSize: '24px',
      marginBottom: '32px',
   },

   '& .modal-buttons-conainer': {
      display: 'flex',
      gap: '18px',
      width: '100%',
      marginTop: '30px',

      '& .modal-buttons': {
         width: '100%',
         height: '39px',
      },

      '& .disabled-modal-buttons': {
         opacity: '0.5',
         width: '100%',
         height: '39px',
      },
   },

   '& .datas-container': {
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      width: '100%',

      '& .datas': {
         display: 'flex',
         flexDirection: 'column',
         width: '16.1rem',

         '& .data': {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '17px',

            '& .data-title': {
               letterSpacing: '0%',
               fontSize: '14px',
               fontWeight: '500',
               color: 'rgb(34, 34, 34)',
               marginRight: '24px',
            },

            '& .data-value': {
               letterSpacing: '0%',
               fontWeight: '400',
               color: 'rgb(98, 99, 102)',
            },

            '& .department': {
               marginLeft: '7px',
            },

            '& .date': {
               marginLeft: '49px',
            },
         },

         '& .department': {
            marginRight: '34px',
         },
      },

      '& .time-picker-container': {
         display: 'flex',
         alignItems: 'center',

         '& .line': {
            margin: '0px 6px !important',
         },

         '& .add-interval': {
            fontSize: '14px',
            fontWeight: '500',
            marginTop: '10px',
            color: 'rgb(4, 135, 65)',
            cursor: 'pointer',
            width: '150px',
         },

         '& .not-allowed-interval': {
            cursor: 'not-allowed',
            marginTop: '14px',
            fontSize: '14px',
            fontWeight: '500',
            opacity: '0.2',
         },

         '& .data-title': {
            letterSpacing: '0%',
            fontSize: '14px',
            fontWeight: '500',
            color: 'rgb(34, 34, 34)',
            margin: '0 24px 27px 33px',
         },

         '& .time-picker-box': {
            display: 'flex',
            alignItems: 'center',
         },

         '& .time-pickers': {
            display: 'flex',
            gap: '12px',

            '& .time-picker': {
               width: '5rem',
               height: '2.375rem',
               borderRadius: '6px',
               border: '1px solid rgb(217, 217, 217)',
               fontSize: '16px',
               fontWeight: '400',
               paddingLeft: '14px',
            },
         },

         '& .remove-interval': {
            width: '30px',
            height: '20px',
            cursor: 'pointer',

            '& #Vector': {
               fill: 'red',
            },
         },

         '& .time-container': {
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
         },
      },
   },
}))
