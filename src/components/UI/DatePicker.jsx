import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { styled } from '@mui/material/styles'
import { parseISO } from 'date-fns'
import { DAYS_OF_WEEK } from '../../utils/constants'

const DatePicker = ({
   value,
   onChange,
   onBlur,
   format = 'YYYY/MM/DD',
   maxDate,
   minDate,
   variant,
   error,
   ...rest
}) => {
   const parsedValue = typeof value === 'string' ? parseISO(value) : value

   return (
      <StyledDatePicker
         value={parsedValue}
         onChange={(date) => onChange(date)}
         onBlur={onBlur}
         dayOfWeekFormatter={(_day, weekday) =>
            DAYS_OF_WEEK[weekday.format('dd')]
         }
         maxDate={maxDate}
         minDate={minDate}
         error={error}
         format={format}
         renderDay={(day, _value, DayComponentProps) => (
            <DayComponentProps
               onFocus={DayComponentProps.onDayFocus}
               onBlur={DayComponentProps.onDayBlur}
            >
               {day.format('MMMM')}
            </DayComponentProps>
         )}
         {...rest}
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
                     borderRadius: variant === 'custom' ? '50%' : '3px',
                     height: variant === 'custom' ? 'none' : '28px',
                     marginTop: '0.5rem',
                     fontWeight: '500',
                     color: 'var(--primary-black-gray, #4D4E51)',
                  },

                  '.MuiPickersDay-root:focus.Mui-selected': {
                     background: 'var(--primary-green, #048741) !important',
                     color: 'white',
                  },
               },
            },
         }}
      />
   )
}
export default DatePicker

const StyledDatePicker = styled(MuiDatePicker)(({ error }) => ({
   borderRadius: '8px',
   fontFamily: 'Roboto',
   fontWeight: '400',
   fontSize: '14px',
   border: error ? '1px solid #d32f2f' : '1px solid #D4D4D4',

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
