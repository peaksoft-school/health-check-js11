import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { format } from 'date-fns'
import Delete from '../../components/UI/admin/Delete'
import { PATIENTS_THUNKS } from '../../store/slices/patients/patientsThunk'
import LinkPatient from '../../components/UI/admin/LinkPatient'
import { ONLINE_APPOINTMENTS_THUNK } from '../../store/slices/online-appointments/onlineAppointmentThunk'
import { ONLINE_APPOINTMENTS_ACTIONS } from '../../store/slices/online-appointments/onlineAppointmentsSlice'
import SelectAll from '../../components/UI/admin/SelectAll'
import DeleteSelected from '../../components/UI/admin/DeleteSelected'
import SelectSeparately from '../../components/UI/admin/SelectSeparately'
import ProcessedCheckbox from '../../components/UI/admin/ProcessedCheckbox'
import { APPLICATION_THUNK } from '../../store/slices/application/applicationThunk'
import {
   handleIsChecked,
   handleIsCheckedItem,
   handleRemoveChecked,
} from '../../store/slices/application/aplicationSlice'
import { formatPhoneNumberWithSpaces } from '../helpers'

const ONLINE_APPOINTMENTS_COLUMN = [
   {
      Header: (
         <SelectAll
            variant="appointments"
            selectFn={ONLINE_APPOINTMENTS_ACTIONS.handleIsChecked}
         />
      ),
      accessor: 'checkbox',

      style: {
         padding: '17px 0 20px 17px',
         flex: 0.06,
      },

      Cell: ({ row }) => (
         <SelectSeparately
            selectFn={ONLINE_APPOINTMENTS_ACTIONS.handleIsCheckedItem}
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
            clearFn={ONLINE_APPOINTMENTS_ACTIONS.clearDeletedAppointmentsIds}
            deleteFn={ONLINE_APPOINTMENTS_THUNK.deleteAllAppointments}
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
      accessor: 'index',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.08,
      },

      tdStyle: {
         fontWeight: '500',
      },

      Cell: ({ row }) => row.index + 1,
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

      Cell: ({ row }) => {
         const { phoneNumber } = row.original
         return <Box>{formatPhoneNumberWithSpaces(phoneNumber)}</Box>
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
               updateFn={ONLINE_APPOINTMENTS_THUNK.updateAppointment}
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
               deleteFn={ONLINE_APPOINTMENTS_THUNK.deleteAppoinment}
               id={row.original.appointmentId}
            />
         )
      },
   },
]

const PATIENTS_COLUMN = [
   {
      Header: '№',
      accessor: 'index',

      style: {
         padding: '19px 24px 20px',
         flex: 0.06,
         color: 'black',
      },

      tdStyle: {
         color: 'black !important',
      },

      Cell: ({ row }) => row.index + 1,
   },

   {
      Header: 'Имя Фамилия',
      accessor: 'surname',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.2,
         color: 'black',
      },

      tdStyle: {
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
         color: 'black',
      },

      tdStyle: {
         color: 'black',
         fontWeight: '500',
      },

      Cell: ({ row }) => {
         const { phoneNumber } = row.original
         return <Box>{formatPhoneNumberWithSpaces(phoneNumber)}</Box>
      },
   },

   {
      Header: 'Почта',
      accessor: 'email',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.25,
         color: 'black',
      },

      tdStyle: {
         color: 'black',
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
         color: 'black',
      },

      tdStyle: {
         color: 'black',
         fontWeight: '500',
      },

      Cell: ({ row }) => (
         <Box>{format(new Date(row.original.resultDate), 'dd.MM.yyyy')}</Box>
      ),
   },

   {
      Header: 'Действия',
      accessor: 'totalDiscount',

      style: {
         padding: '19px 10px 20px 10px',
         fontWeight: '700',
         flex: 0.1,
         color: 'black',
      },

      tdStyle: {
         color: 'black',
         display: 'flex',
         justifyContent: 'center',
      },

      Cell: ({ row }) => {
         return (
            <Delete
               name={row.original.surname}
               id={row.original.id}
               deleteFn={PATIENTS_THUNKS.deletePatients}
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

const APPLICATIONS_COLUMN = [
   {
      Header: <SelectAll variant="applications" selectFn={handleIsChecked} />,
      accessor: 'checkbox',

      style: {
         padding: '17px 0 20px 17px',
         flex: 0.06,
      },

      Cell: ({ row }) => (
         <SelectSeparately
            {...row.original}
            selectFn={handleIsCheckedItem}
            variant="applications"
         />
      ),
   },

   {
      Header: (
         <DeleteSelected
            deleteFn={APPLICATION_THUNK.deleteAllApplication}
            clearFn={handleRemoveChecked}
            variant="applications"
         />
      ),
      accessor: 'action',

      style: {
         padding: '17px 0 20px',
         flex: 0.06,
         cursor: 'pointer',
      },
   },

   {
      Header: '№',
      accessor: 'index',

      style: {
         padding: '17px 0 20px',
         fontWeight: '700',
         flex: 0.1,
      },

      tdStyle: {
         fontWeight: '500',
      },

      Cell: ({ row }) => row.index + 1,
   },
   {
      Header: 'Имя',
      accessor: 'name',

      style: {
         padding: '19px 0 20px',
         fontWeight: '600',
         flex: 0.4,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },
   {
      Header: 'Дата',
      accessor: 'original.date',

      style: {
         padding: '19px 0 20px',
         fontWeight: '600',
         flex: 0.4,
      },

      tdStyle: {
         fontWeight: '500',
      },

      Cell: ({ row }) => (
         <Box>{format(new Date(row.original.date), 'dd.MM.yy')} </Box>
      ),
   },
   {
      Header: 'Номер телефона',
      accessor: 'number',

      style: {
         padding: '19px 0 20px',
         fontWeight: '600',
         flex: 0.8,
         justifyContent: 'center',
      },

      tdStyle: {
         fontWeight: '500',
      },

      Cell: ({ row }) => {
         const { number } = row.original
         return <Box>{formatPhoneNumberWithSpaces(number)}</Box>
      },
   },
   {
      Header: 'Обработан',
      accessor: 'processed',

      style: {
         padding: '19px 10px 20px',
         flex: 0.1,
         fontWeight: '700',
      },

      tdStyle: {
         display: 'flex',
         justifyContent: 'center',
      },

      Cell: ({ row }) => (
         <ProcessedCheckbox
            variant="applications"
            updateFn={APPLICATION_THUNK.updateApplication}
            checked={row.original.processed}
            id={row.original.id}
         />
      ),
   },

   {
      Header: 'Действия',
      accessor: 'totalDiscount',

      style: {
         padding: '19px 10px 20px',
         fontWeight: '700',
         flex: 0.1,
      },

      tdStyle: {
         display: 'flex',
         justifyContent: 'end',
      },

      Cell: ({ row }) => (
         <Delete
            deleteFn={APPLICATION_THUNK.deleteApplication}
            id={row.original.id}
            name={row.original.name}
            disabled={row.original.processed}
         />
      ),
   },
]

export {
   ONLINE_APPOINTMENTS_COLUMN,
   PATIENTS_COLUMN,
   COLUMNS,
   APPLICATIONS_COLUMN,
}
