import { styled, Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { CalendarWithDotsIcon, UsersIcon } from '../../assets/icons'
import Select from '../UI/Select'
import Button from '../UI/Button'

const OnlineAppointmentsContent = ({
   toggleSpecialist,
   toggleDate,
   selectHandler,
   doctorName,
   date,
   openForm,
   validate,
}) => {
   const { facilityArray } = useSelector((state) => state.onlineAppointments)

   const getfacility = facilityArray?.map((facility) => ({
      value: facility.id,
      label: facility.facility,
   }))

   const appointmentTime = date.slice(0, 5)

   return (
      <StyledContainer>
         <StyledSelect
            variant="appointments"
            placeholder="Выбрать услуги"
            options={getfacility}
            value={getfacility}
            onChange={selectHandler}
         />

         <StyledButton onClick={toggleSpecialist} variant="grey">
            <UsersIcon className="icon" />

            {doctorName ? (
               <Typography>{doctorName.name}</Typography>
            ) : (
               <Typography>Выбрать специалиста</Typography>
            )}
         </StyledButton>

         <StyledButton onClick={toggleDate} variant="grey">
            <CalendarWithDotsIcon className="icon" />

            {date ? (
               <Typography>{appointmentTime}</Typography>
            ) : (
               <Typography>Выбрать дату и время</Typography>
            )}
         </StyledButton>

         {validate && <Button onClick={openForm}>Продолжить</Button>}
      </StyledContainer>
   )
}

export default OnlineAppointmentsContent

const StyledContainer = styled(Box)(() => ({
   marginTop: '30px',
   display: 'flex',
   flexDirection: 'column',
   gap: '20px',
}))

const StyledButton = styled(Button)(({ theme }) => ({
   '&.MuiButtonBase-root': {
      '& div': {
         display: 'flex',
         alignItems: 'center',
         width: '100%',

         '& .icon': {
            marginRight: '20px',
         },
      },
      height: '60px',
      color: 'black',
      backgroundColor: theme.palette.primary.main,
      border: 'none',

      '&:hover': {
         color: 'black',
         backgroundColor: theme.palette.primary.main,
         border: 'none',
      },
   },
}))

const StyledSelect = styled(Select)(() => ({
   backroungColor: 'white',

   '& .MuiSelect-select': {
      display: 'flex',
      marginLeft: '40px',
      border: 'none',
      padding: '20px',
   },
}))
