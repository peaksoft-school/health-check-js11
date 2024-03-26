import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { styled } from '@mui/material/styles'
import { format as formatDate } from 'date-fns'
import { DAYS_OF_WEEK } from '../../utils/constants'
import { CalendarIcon } from '../../assets/icons'

const DatePicker = ({
   value,
   onChange,
   onBlur,
   maxDate,
   minDate,
   variant,
   error,
   ...rest
}) => {
   const dayOfWeekFormatter = (_day, weekday) => {
      return DAYS_OF_WEEK[formatDate(weekday, 'dd')]
   }

   return (
      <StyledDatePicker
         value={value}
         onChange={onChange}
         onBlur={onBlur}
         dayOfWeekFormatter={dayOfWeekFormatter}
         maxDate={maxDate}
         minDate={minDate}
         variant={variant}
         error={error}
         slots={{
            openPickerIcon: CalendarIcon,
         }}
         slotProps={{
            desktopPaper: {
               sx: {
                  '.MuiPickersArrowSwitcher-spacer': {
                     width: '90px',
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
                     textTransform: 'capitalize',
                  },

                  '.MuiPickersCalendarHeader-label': {
                     textTransform: 'capitalize',
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
                     borderRadius: '50%',
                     height: 'none',
                     fontWeight: '500',
                     color: 'var(--primary-black-gray, #4D4E51)',
                  },

                  '.MuiPickersDay-root:focus.Mui-selected': {
                     background: 'var(--primary-green, #048741) !important',
                     color: 'white',
                  },

                  '.MuiPickersDay-root.Mui-selected': {
                     background: 'var(--primary-green, #048741) !important',
                     color: 'white',
                  },
               },
            },
         }}
         {...rest}
      />
   )
}
export default DatePicker

const StyledDatePicker = styled(MuiDatePicker)(({ error }) => ({
   borderRadius: '8px',
   fontFamily: 'Roboto',
   fontWeight: '400',
   fontSize: '14px',
   border: error ? '1px solid red' : '1px solid #D4D4D4',

   input: {
      width: '5.625rem',
      padding: '8px 15px 8px 15px',
      fontSize: '14px',
      color: '#4D4E51',
   },

   '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
   },
}))
