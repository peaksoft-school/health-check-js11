import { useEffect, useState } from 'react'
import { Box, Button, Typography, styled } from '@mui/material'
import { addDays, format } from 'date-fns'
import { useSelector } from 'react-redux'

const TableSchedule = () => {
   const { schedules } = useSelector((state) => state.schedule)

   const [startDate, setStartDate] = useState('')
   const [endDate, setEndDate] = useState('')

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

   const generateDateRange = () => {
      if (!startDate || !endDate) {
         return []
      }

      const start = new Date(startDate)
      const end = new Date(endDate)

      const dateRange = []

      while (start <= end) {
         const dayOfWeek = daysOfWeek[start.getDay()]
         const date = start.getDate()
         const month = format(start, 'MMMM')

         dateRange.push({ dayOfWeek, date, month })
         start.setDate(start.getDate() + 1)
      }

      return dateRange
   }

   return (
      <StyledContainer>
         <Box className="action-container">
            <Box>
               <Button className="buttons">Изменить день</Button>
               <Button className="buttons">Установить по шаблону</Button>
            </Box>

            <Box className="date-picker">
               <input
                  type="date"
                  placeholder="От"
                  value={startDate}
                  onChange={(e) => handleDateChange(e, 'start')}
               />
               -
               <input
                  type="date"
                  placeholder="До"
                  value={endDate}
                  onChange={(e) => handleDateChange(e, 'end')}
               />
            </Box>
         </Box>

         <table className="table">
            <thead>
               <tr>
                  <th className="header-specialist">СПЕЦИАЛИСТЫ</th>

                  {generateDateRange().map(({ dayOfWeek, date, month }) => (
                     <th className="header-dates th">
                        {dayOfWeek}
                        <Box component="br" />
                        {date} {month}
                     </th>
                  ))}
               </tr>
            </thead>

            <tbody>
               {schedules.map(({ image, surname, position }) => (
                  <tr key={surname}>
                     <Box component="td" className="specialist">
                        <img src={image} alt="imag" className="image" />

                        <Typography className="surname">{surname}</Typography>
                        <Typography className="position">{position}</Typography>
                     </Box>

                     {generateDateRange().map(({ dayOfWeek, date, month }) => (
                        <Box
                           component="td"
                           key={`${surname}-${dayOfWeek}-${date}-${month}`}
                           className="td"
                        >
                           <Box className="free-time-container">
                              <Typography variant="p" className="free-time">
                                 11:00 - 13:00
                              </Typography>

                              <Typography variant="p" className="free-time">
                                 15:00 - 16:00
                              </Typography>

                              <Typography variant="p" className="free-time">
                                 17:00 - 17:30
                              </Typography>
                           </Box>
                        </Box>
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
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

      '& .buttons': {
         backgroundColor: 'rgb(224, 226, 231)',
         padding: '8px 20px 9px 20px',
         color: 'rgb(77, 78, 81)',
         fontWeight: '400',
         fontSize: '14px',
         borderRadius: '4px',
         marginRight: '10px',
      },
   },

   '& .table': {
      border: '2px solid #D9D9D9',
      borderCollapse: 'collapse',
      // maxWidth: '86.188rem',
      // width: '1379px',

      maxWidth: '100%',
      width: '100%',
      overflowX: 'auto',

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

      '& .td': {
         border: '2px solid #D9D9D9',
         width: '6.625rem',
         padding: '6px',

         '& .free-time-container': {
            padding: '6px',
            borderLeft: '3px solid #1F6ED4',
            backgroundColor: '#DBEBFF',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',

            '& .free-time': {
               color: '#1F6ED4',
               fontWeight: '400',
               fontStyle: 'italic',
               fontSize: '12px',
               width: '100%',
            },
         },
      },
   },
}))
