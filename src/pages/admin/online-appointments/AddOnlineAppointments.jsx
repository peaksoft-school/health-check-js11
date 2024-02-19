import { styled, Typography } from '@mui/material'
import Modal from '../../../components/UI/Modal'
import Select from '../../../components/UI/Select'
import DatePicker from '../../../components/UI/DatePicker'
import TimePicker from '../../../components/UI/TimePicker'
import { DAYS } from '../../../utils/constants'

const AddOnlineAppointments = () => {
   const open = true
   return (
      <Modal open={open}>
         <StyledForm>
            <h2>Добавление записей</h2>
            <div>
               <Typography>Услуги</Typography>
               <Select placeholder="Выберите услугу" className="select" />
            </div>
            <div>
               <Typography>Специалисты</Typography>
               <Select placeholder="Выберите специалиста" />
            </div>
            <div className="block-inputs">
               <div>
                  <Typography>Дата начало</Typography>
                  <DatePicker />
               </div>
               <span>-</span>
               <div>
                  <Typography>Дата окончания</Typography>
                  <DatePicker />
               </div>
            </div>
            <div className="block-inputs">
               <div>
                  <Typography>Время от</Typography>
                  <TimePicker />
               </div>
               <span>-</span>
               <div>
                  <Typography>Время до</Typography>
                  <TimePicker />
               </div>
               <div>
                  <Typography>Интервал часов </Typography>
                  <Select placeholder="Выберите интервал часов" />
               </div>
            </div>
            <div className="block-inputs">
               <div>
                  <Typography>Время от</Typography>
                  <TimePicker />
               </div>
               <span>-</span>
               <div>
                  <Typography>Время до</Typography>
                  <TimePicker />
               </div>
               <div>
                  <Typography>Выберите время для перерыва </Typography>
               </div>
            </div>
            <div className="asd">
               {DAYS.map(({ id, label }) => (
                  <button type="button" className="active" key={id}>
                     {label}
                  </button>
               ))}
            </div>
            <div>{/* <Button type="butt/on">ОТМЕНИТЬ</Button> */}</div>
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

   '& h2': {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: '500',
      color: '#222',
   },

   '& .custom-select': {
      borderRadius: '6px !important',
      height: '5.2vh',
      border: 'none',
   },

   '& > .select': {},

   '& > .block-inputs': {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      span: {
         marginTop: '1rem',
      },
   },

   '& .asd': {
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
}))
