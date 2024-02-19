import { styled, Typography, Box } from '@mui/material'
import Modal from '../../../components/UI/Modal'
import Select from '../../../components/UI/Select'
import DatePicker from '../../../components/UI/DatePicker'
import TimePicker from '../../../components/UI/TimePicker'
import Button from '../../../components/UI/Button'
import { DAYS } from '../../../utils/constants'

const AddOnlineAppointments = ({ open, onClose }) => {
   const open1 = true

   return (
      <Modal open={open1}>
         <StyledForm>
            <h2>Добавление записей</h2>
            <Box>
               <Typography>Услуги</Typography>
               <Select placeholder="Выберите услугу" className="select" />
            </Box>
            <Box>
               <Typography>Специалисты</Typography>
               <Select placeholder="Выберите специалиста" />
            </Box>
            <Box className="input-block">
               <Box>
                  <Typography>Дата начало</Typography>
                  <DatePicker />
               </Box>
               <span>-</span>
               <Box>
                  <Typography>Дата окончания</Typography>
                  <DatePicker />
               </Box>
            </Box>
            <Box className="input-block">
               <Box>
                  <Typography>Время от</Typography>
                  <TimePicker />
               </Box>
               <span>-</span>
               <Box>
                  <Typography>Время до</Typography>
                  <TimePicker />
               </Box>
               <Box>
                  <Typography>Интервал часов </Typography>
                  <Select placeholder="Выберите интервал часов" />
               </Box>
            </Box>
            <Box className="input-block">
               <Box>
                  <Typography>Время от</Typography>
                  <TimePicker />
               </Box>
               <span>-</span>
               <Box>
                  <Typography>Время до</Typography>
                  <TimePicker />
               </Box>
               <Box>
                  <Typography>Выберите время для перерыва </Typography>
               </Box>
            </Box>
            <Box className="asd">
               {DAYS.map(({ id, label }) => (
                  <button type="button" className="active" key={id}>
                     {label}
                  </button>
               ))}
            </Box>
            <Box className="button-group">
               <StyledButton type="button" variant="grey">
                  ОТМЕНИТЬ
               </StyledButton>
               <StyledButton type="button">ОПУБЛИКОВАТЬ </StyledButton>
            </Box>
         </StyledForm>
      </Modal>
   )
}

export default AddOnlineAppointments

const StyledForm = styled('form')(() => ({
   padding: '10px',
   width: '490px',
   height: '594px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',

   '& > h2': {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: '500',
      color: '#222',
   },

   '& > .custom-select': {
      borderRadius: '6px !important',
      height: '5.2vh',
      border: 'none',
   },

   '& > .input-block': {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      span: {
         marginTop: '1rem',
      },
   },

   '& > .asd': {
      display: 'flex',
      justifyContent: 'space-between',
   },

   '& .active': {
      backgroundColor: '#fff',
      padding: '10px 17px 10px 16px',
      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: '10px',
      border: '1px solid #d9d9d9',
      fontSize: '16px',
      fontWeight: '600',
      color: '#959595',
      // backgroundColor: '#3977c0',
      // color: '#ffffff',
      // border: '0.3px solid #3977c0',
   },

   '& > .button-group': {
      display: 'flex',
      justifyContent: 'space-between',
   },
}))

const StyledButton = styled(Button)(() => ({
   width: '14.3rem',
   height: '2.5rem',
}))
