import { Box, styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { DateCalendar } from '@mui/x-date-pickers'
import { format } from 'date-fns'
import { DAYS_OF_WEEK } from '../../utils/constants'
import Button from '../UI/Button'

const ChooseDate = ({
   selectedDate,
   setSelectedDate,
   selectedTime,
   setSelectedTime,
}) => {
   const { date } = useSelector((state) => state.appointments)

   const dayUnavailableForConsultationHandler = (day) => {
      if (day instanceof Date) {
         const formattedDay = format(day, 'yyyy-MM-dd')
         const consultation = date.find(
            (item) => item.dateOfConsultation === formattedDay
         )

         return (
            consultation && consultation.startTimeOfConsultation.length === 0
         )
      }

      return false
   }

   const renderSelectedDateTimesheet = () => {
      if (selectedDate) {
         if (selectedDate instanceof Date) {
            const formattedDate = format(selectedDate, 'yyyy-MM-dd')
            const consultation = date.find(
               (item) => item.dateOfConsultation === formattedDate
            )

            if (
               consultation &&
               consultation.startTimeOfConsultation.length > 0
            ) {
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
      }

      return null
   }

   const changeDateHandler = (date) => {
      setSelectedDate(date)
      setSelectedTime(null)
   }

   const dayOfWeekFormatter = (_day, weekday) => {
      return DAYS_OF_WEEK[format(weekday, 'EE')]
   }

   return (
      <StyledBox>
         <hr />

         <StyledContainer>
            <StyledDateCalendar
               shouldDisableDate={dayUnavailableForConsultationHandler}
               value={selectedDate}
               onChange={changeDateHandler}
               dayOfWeekFormatter={dayOfWeekFormatter}
            />

            {selectedDate && (
               <StyledTimesBox>{renderSelectedDateTimesheet()}</StyledTimesBox>
            )}
         </StyledContainer>
      </StyledBox>
   )
}
export default ChooseDate

const StyledBox = styled(Box)(() => ({
   '& > .button': {
      margin: '20px',
   },
}))

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '10px',
   width: '100% !important',
}))

const StyledDateCalendar = styled(DateCalendar)(() => ({
   backgroundColor: 'white',
   width: '100%',

   '& .MuiPickersArrowSwitcher-spacer': {
      width: '120px',
   },

   '& .MuiPickersArrowSwitcher-button': {
      marginLeft: '50px',
   },

   '& .MuiDayCalendar-weekDayLabel': {
      color: 'var(--primary-black, #222)',
      textAlign: 'center',
      fontFamily: 'Manrope',
      fontSize: '14px',
      fontWeight: '500',
      textTransform: 'capitalize',
   },

   '& .MuiPickersCalendarHeader-label': {
      marginRight: '37px',
      textTransform: 'capitalize',
   },

   '& .MuiIconButton-root-MuiPickersArrowSwitcher-button': {
      position: 'absolute',
      // display: 'none !important',
   },

   '& .MuiPickersCalendarHeader-switchViewButton': {
      display: 'none',
   },

   '& .MuiPickersCalendarHeader-labelContainer': {
      marginLeft: '20%',
      order: '1',
      margin: '0',
      position: 'absolute',
      right: '100px',
   },

   '& .MuiPickersDay-root': {
      borderRadius: '3px',
      height: '28px',
      marginTop: '0.5rem',
      fontWeight: '500',
      color: 'var(--primary-black-gray, black)',
   },

   '& .MuiPickersDay-root:focus.Mui-selected': {
      background: 'var(--primary-green, #048741) !important',
      color: 'white',
   },

   '& .MuiPickersDay-root.Mui-selected': {
      background: 'var(--primary-green, #048741) !important',
      color: 'white',
   },

   '& .MuiPickersDay-root.Mui-disabled': {
      color: 'var(--primary-gray, #4D4E51)',
   },
}))

const StyledTimeButton = styled(Button)(({ variant }) => ({
   padding: '5px 0',
   width: '91px',
   height: '33px',
   borderColor: 'grey',
   margin: '4px',
   borderRadius: '1.5rem !important',
   fontSize: '10px',
   backgroundColor:
      variant === 'green' ? 'var(--primary-green, #048741)' : 'transparent',
   color: variant === 'green' ? 'white' : 'var(--primary-black, #222)',

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
