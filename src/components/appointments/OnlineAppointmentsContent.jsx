import { styled, Box, Typography } from '@mui/material'
import {
   CalendarWithDotsIcon,
   ChooseServiceIcon,
   UsersIcon,
} from '../../assets/icons'
import { DEPARTMENTS } from '../../utils/constants'
import Select from '../UI/Select'
import Button from '../UI/Button'

const OnlineAppointmentsContent = ({ serviceChangeHandler, service }) => {
   return (
      <StyledContainer>
         <StyledSelect
            value={service}
            onChange={serviceChangeHandler}
            icon={<ChooseServiceIcon className="icon" />}
            placeholder="Выбрать услуги"
            options={DEPARTMENTS}
         />

         <StyledButton variant="grey">
            <UsersIcon />
            <Typography>Выбрать специалиста</Typography>
         </StyledButton>

         <StyledButton variant="grey">
            <CalendarWithDotsIcon />
            <Typography>Выбрать дату и время</Typography>
         </StyledButton>
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
      },

      backgroundColor: theme.palette.primary.main,
      border: 'none',

      '&:hover': {
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
      backroungColor: 'white',
   },
}))
