import { Box, styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { DateCalendar } from '@mui/x-date-pickers'
import { DAYS_OF_WEEK } from '../../utils/constants'
import Button from '../UI/Button'

const ChooseDate = ({
   formHandler,
   selectedDate,
   setSelectedDate,
   selectedTime,
   setSelectedTime,
}) => {
   const { date } = useSelector((state) => state.appointments)

   const shouldDisableDay = (day) => {
      const consultation = date.find(
         (item) => item.dateOfConsultation === day.format('YYYY-MM-DD')
      )

      return consultation && consultation.startTimeOfConsultation.length === 0
   }

   const renderSelectedDateTimesheet = () => {
      if (selectedDate) {
         const consultation = date.find(
            (item) =>
               item.dateOfConsultation === selectedDate.format('YYYY-MM-DD')
         )

         if (consultation && consultation.startTimeOfConsultation.length > 0) {
            return consultation.startTimeOfConsultation?.map((time) => {
               const appointmentTime = time ? time.slice(0, 5) : ''
               const isSelected = appointmentTime === selectedTime

               return (
                  <StyledTimeButton
                     key={time}
                     variant={isSelected ? 'green' : 'grey'}
                     onClick={() => setSelectedTime(appointmentTime)}
                  >
                     {appointmentTime}
                  </StyledTimeButton>
               )
            })
         }
      }

      return null
   }

   const handleDateChange = (date) => {
      setSelectedDate(date)
      setSelectedTime(null)
   }

   return (
      <>
         <hr />

         <StyledContainer>
            <StyledDateCalendar
               dayOfWeekFormatter={(_day, weekday) =>
                  DAYS_OF_WEEK[weekday.format('dd')]
               }
               shouldDisableDate={shouldDisableDay}
               renderday={(day, _value, DayComponentProps) => (
                  <DayComponentProps
                     onFocus={DayComponentProps.onDayFocus}
                     onBlur={DayComponentProps.onDayBlur}
                  >
                     {day.format('MMMM')}
                  </DayComponentProps>
               )}
               value={selectedDate}
               onChange={handleDateChange}
            />

            {selectedDate && (
               <StyledTimesBox>{renderSelectedDateTimesheet()}</StyledTimesBox>
            )}
         </StyledContainer>
         <StyledButton onClick={formHandler}>Продолжить</StyledButton>
      </>
   )
}
export default ChooseDate

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '10px',
   width: '100% !important',
}))

const StyledDateCalendar = styled(DateCalendar)(() => ({
   backgroundColor: 'white',
   width: '100%',

   '.MuiPickersArrowSwitcher-spacer': {
      width: '120px',
   },

   '.MuiPickersArrowSwitcher-button': {
      marginLeft: '38px',
   },

   '.MuiDayCalendar-weekDayLabel': {
      color: 'var(--primary-black, #222)',
      textAlign: 'center',
      fontFamily: 'Manrope',
      fontSize: '14px',
      fontWeight: '500',
   },

   '.MuiPickersCalendarHeader-label': {
      marginRight: '37px',
   },

   '.MuiIconButton-root-MuiPickersArrowSwitcher-button': {
      position: 'absolute',
   },

   '.MuiPickersCalendarHeader-switchViewButton': {
      display: 'none',
   },

   '.MuiPickersCalendarHeader-labelContainer': {
      marginLeft: '20%',
      order: '1',
      margin: '0',
      position: 'absolute',
      right: '100px',
   },

   '.MuiPickersDay-root': {
      borderRadius: '3px',
      height: '28px',
      marginTop: '0.5rem',
      fontWeight: '500',
      color: 'var(--primary-black-gray, black)',
   },

   '.MuiPickersDay-root:focus.Mui-selected': {
      background: 'var(--primary-green, #048741) !important',
      color: 'white',
   },

   '.MuiPickersDay-root.Mui-disabled': {
      color: 'var(--primary-gray, #4D4E51)',
   },
}))

const StyledTimeButton = styled(Button)(({ variant }) => ({
   '&.MuiButtonBase-root': {
      padding: '5px 0',
      width: '91px',
      borderRadius: '1.5rem',
      height: '33px',
      borderColor: 'grey',
      margin: '4px',
      fontSize: '10px',
      backgroundColor:
         variant === 'green' ? 'var(--primary-green, #048741)' : 'transparent',
      color: variant === 'green' ? 'white' : 'var(--primary-black, #222)',
   },

   '&:active': {
      borderRadius: '1.5rem',
   },

   '&:hover': {
      borderRadius: '1.5rem',
   },
}))

const StyledTimesBox = styled(Box)(() => ({
   padding: '10px',
   margin: '5px',
   paddingLeft: '30px',

   width: '370px',
   borderRadius: '15px',
   backgroundColor: 'white',
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      width: '100%',
      margin: '15px  0',
      height: '2.5rem',
      fontSize: '0.875rem',

      '&:active': {
         borderRadius: '0.625rem',
      },
   },
}))
