import { Box, Typography, styled, ButtonBase } from '@mui/material'
import LinkPatient from '../../components/UI/admin/LinkPatient'
import { PATIENTS_THUNK } from '../../store/slices/patients/patientsThunk'
import Delete from '../../components/UI/admin/Delete'
import { APPOINTMENTS_THUNK } from '../../store/slices/online-appointments/appointmentThunk'
import DeleteSelected from '../../components/UI/admin/DeleteSelected'
import { APPOINTMENTS_ACTIONS } from '../../store/slices/online-appointments/appointmentsSlice'
import SelectAll from '../../components/UI/admin/SelectAll'
import SelectSeparately from '../../components/UI/admin/SelectSeparately'
import ProcessedCheckbox from '../../components/UI/admin/ProcessedCheckbox'

const ONLINE_APPOINTMENTS_COLUMN = [
   {
      Header: (
         <SelectAll
            variant="appointments"
            selectFn={APPOINTMENTS_ACTIONS.handleIsChecked}
         />
      ),
      accessor: 'checkbox',

      style: {
         padding: '17px 0 20px 17px',
         flex: 0.06,
      },

      Cell: ({ row }) => (
         <SelectSeparately
            selectFn={APPOINTMENTS_ACTIONS.handleIsCheckedItem}
            variant="appointments"
            id={row.original.appointmentId}
            isSelected={row.original.isSelected}
         />
      ),
   },

   {
      Header: (
         <DeleteSelected
            variant="appointments"
            clearFn={APPOINTMENTS_ACTIONS.clearDeletedAppointmentsIds}
            deleteFn={APPOINTMENTS_THUNK.deleteAllAppointments}
         />
      ),

      accessor: 'action',

      style: {
         padding: '17px 0 20px',
         flex: 0.06,
      },
   },

   {
      Header: '№',
      accessor: 'appointmentId',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.08,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   {
      Header: 'Имя и фамилия',
      accessor: 'fullName',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.2,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   {
      Header: 'Номер телефона',
      accessor: 'phoneNumber',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.2,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   {
      Header: 'Почта',
      accessor: 'email',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.25,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   {
      Header: 'Выбор услуги',
      accessor: 'facility',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.2,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   {
      Header: 'Выбор специалиста',
      accessor: 'specialist',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.22,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   {
      Header: 'Дата и время',
      accessor: 'time',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.16,
      },

      tdStyle: {
         fontWeight: '500',
      },

      Cell: ({ row }) => (
         <Box>
            <Typography variant="p">{row.original.localDate}</Typography>
            <Typography variant="p">{row.original.localTime}</Typography>
         </Box>
      ),
   },

   {
      Header: 'Обработан',
      accessor: 'status',

      style: {
         padding: '19px 0 20px',
         flex: 0.16,
         display: 'flex',
         justifyContent: 'center',
         fontWeight: '700',
      },

      tdStyle: {
         display: 'flex',
         alignItems: 'start',
      },

      Cell: ({ row }) => {
         return (
            <ProcessedCheckbox
               checked={row.original.processed}
               id={row.original.appointmentId}
               updateFn={APPOINTMENTS_THUNK.updateAppointment}
               variant="appointments"
            />
         )
      },
   },

   {
      Header: 'Действия',
      accessor: 'totalDiscount',

      style: {
         padding: '19px 10px 20px 10px',
         fontWeight: '700',
         flex: 0.1,
      },

      tdStyle: {
         display: 'flex',
         justifyContent: 'center',
      },

      Cell: ({ row }) => {
         return (
            <Delete
               name={row.original.fullName}
               disabled={row.original.processed}
               deleteFn={APPOINTMENTS_THUNK.deleteAppoinment}
               id={row.original.appointmentId}
            />
         )
      },
   },
]

const PATIENTS_COLUMN = [
   {
      Header: '№',
      accessor: 'id',

      style: {
         padding: '19px 24px 20px',
         fontWeight: '700',
         flex: 0.06,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   {
      Header: 'Имя Фамилия',
      accessor: 'surname',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.2,
      },

      tdStyle: {
         color: 'black',
         fontWeight: '500',
      },

      Cell: ({ row }) => {
         return <LinkPatient row={row} />
      },
   },

   {
      Header: 'Номер телефона',
      accessor: 'phoneNumber',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.2,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   {
      Header: 'Почта',
      accessor: 'email',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.25,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   {
      Header: 'Дата сдачи',
      accessor: 'resultDate',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.2,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   {
      Header: 'Действия',
      accessor: 'totalDiscount',

      style: {
         padding: '19px 10px 20px 10px',
         fontWeight: '700',
         flex: 0.1,
      },

      tdStyle: {
         display: 'flex',
         justifyContent: 'center',
      },

      Cell: ({ row }) => {
         return (
            <Delete
               name={row.original.surname}
               id={row.original.id}
               deleteFn={PATIENTS_THUNK.deletePatients}
               variant="patients"
            />
         )
      },
   },
]

const COLUMNS = [
   {
      Header: 'Id',
      accessor: 'id',
   },
   {
      Header: 'Имя',
      accessor: 'first_name',
   },
   {
      Header: 'Фамилия',
      accessor: 'last_name',
   },
   {
      Header: 'День рождения',
      accessor: 'date_of_birth',
   },
   {
      Header: 'Страна',
      accessor: 'country',
   },
   {
      Header: 'Телефон',
      accessor: 'phone',
   },
   {
      Header: 'Действия',
      accessor: 'totalDiscount',
   },
]

export { ONLINE_APPOINTMENTS_COLUMN, COLUMNS, PATIENTS_COLUMN }

const StyledDeleteButton = styled(ButtonBase)(() => ({
   cursor: 'pointer',
   width: '26px',
   height: '22px',
   transition: '0.3s ease-in-out',

   '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.2,
   },
}))

const StyledModalContent = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'column',
   margin: '0.63rem 1.38rem',

   '& .name': {
      fontFamily: 'Manrope',
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '24.59px',
      marginBottom: '1.25rem',
   },

   '& .description': {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '24.59px',
   },

   '& .buttons-container': {
      display: 'flex',
      gap: '18px',
   },

   '& > div > .button': {
      height: '2.625rem',
      padding: '0.625rem 1.25rem !important',
   },
}))
