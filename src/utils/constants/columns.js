import { Box, Tooltip, Typography } from '@mui/material'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { PATIENTS_THUNKS } from '../../store/slices/patients/patientsThunk'
import { APPOINTMENTS_THUNK } from '../../store/slices/online-appointments/appointmentThunk'
import { APPOINTMENTS_ACTIONS } from '../../store/slices/online-appointments/appointmentsSlice'
import { formatPhoneNumberWithSpaces } from '../helpers'
import { APPLICATIONS_THUNKS } from '../../store/slices/application/applicationThunk'
import {
   handleIsChecked,
   handleIsCheckedItem,
} from '../../store/slices/application/aplicationSlice'
import SelectSeparately from '../../components/UI/admin/SelectSeparately'
import DeleteSelected from '../../components/UI/admin/DeleteSelected'
import SelectAll from '../../components/UI/admin/SelectAll'
import ProcessedCheckbox from '../../components/UI/admin/ProcessedCheckbox'
import LocalDate from '../../components/UI/admin/LocalDate'
import Delete from '../../components/UI/admin/Delete'
import SpecialistSwicher from '../../components/specialists/SpecialistSwicher'
import SpecialistInfo from '../../components/specialists/SpecialistInfo'
import SpecialistActions from '../../components/specialists/SpecialistActions'
import Navigate from '../../components/UI/admin/Navigate'
import Email from '../../components/online-appointments/Email'

const SCHEDULE_COLUMN = [
   {
      Header: 'Специалисты',
      accessor: 'name',

      Cell: ({ row }) => (
         <Box>
            <img src={row.origindl.image} alt="doctor" />

            <Typography>{row.origindl.surename}</Typography>
            <Typography>{row.origindl.position}</Typography>
         </Box>
      ),
   },
]

const ONLINE_APPOINTMENTS_COLUMN = [
   {
      Header: (
         <SelectAll
            variant="online-appointments"
            selectFn={APPOINTMENTS_ACTIONS.handleIsChecked}
         />
      ),
      accessor: 'checkbox',

      style: {
         padding: '17px 0 20px 17px',
         flex: 0.06,
      },

      tdStyle: {
         maxWidth: '64px',
      },

      Cell: ({ row }) => (
         <SelectSeparately
            selectFn={APPOINTMENTS_ACTIONS.handleIsCheckedItem}
            variant="online-appointments"
            id={row.original.appointmentId}
            isSelected={row.original.isSelected}
            isDisabled={!row.original.processed}
         />
      ),
   },

   {
      Header: (
         <DeleteSelected
            variant="appointments"
            deleteFn={APPOINTMENTS_THUNK.deleteAllAppointments}
         />
      ),

      accessor: 'action',

      style: {
         padding: '17px 0 20px',
         flex: 0.06,
      },

      tdStyle: {
         maxWidth: '47px',
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
         maxWidth: '63px',
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
         maxWidth: '158px',
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
         maxWidth: '159px',
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
         padding: '19px 0px 20px',
         fontWeight: '700',
         flex: 0.25,
         maxWidth: '210px',
         minWidth: '210px',
      },

      tdStyle: {
         maxWidth: '210px',
         minWidth: '210px',
         overflow: 'hidden',
         fontWeight: '500',
      },

      Cell: ({ row }) => <Email row={row} />,
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
         maxWidth: '159px',
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
         maxWidth: '175px',
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
         fontSize: '5px',
         maxWidth: '127px',
      },

      Cell: ({ row }) => <LocalDate row={row} />,
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
         maxWidth: '127px',
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
         maxWidth: '99px',
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

      Cell: ({ row }) => (
         <Navigate {...row.original} text={row.original.surname} />
      ),
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
            isSelected={row.original.isSelected}
            selectFn={handleIsCheckedItem}
            variant="applications"
            isDisabled={!row.original.processed}
            id={row.original.id}
         />
      ),
   },
   {
      Header: (
         <DeleteSelected
            deleteFn={APPLICATIONS_THUNKS.deleteAllApplication}
            variant="applications"
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
         padding: '17px 0 20px',
         fontWeight: '700',
         flex: 0.1,
      },

      tdStyle: {
         paddingRight: '5px',
         fontWeight: '500',
      },

      Cell: ({ row }) => row.index + 1,
   },
   {
      Header: 'Имя',
      accessor: 'username',

      style: {
         padding: '19px 0 20px',
         fontWeight: '600',
         flex: 0.4,
      },

      tdStyle: {
         paddingRight: '9px',
         fontWeight: '500',
      },
   },
   {
      Header: 'Дата',
      accessor: 'dateOfApplicationCreation',
      style: {
         padding: '19px 0 20px',
         fontWeight: '600',
         flex: 0.4,
      },

      tdStyle: {
         paddingRight: '10px',
         fontWeight: '500',
      },

      Cell: ({ row }) => (
         <Box>
            {format(
               new Date(row.original.dateOfApplicationCreation),
               'dd.MM.yy'
            )}{' '}
         </Box>
      ),
   },
   {
      Header: 'Номер телефона',
      accessor: 'phoneNumber',

      style: {
         padding: '19px 0 20px',
         fontWeight: '600',
         flex: 0.7,
         justifyContent: 'center',
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
      Header: 'Обработан',
      accessor: 'processed',
      style: {
         padding: '19px 10px 20px',
         flex: 0.2,
         fontWeight: '700',
      },

      tdStyle: {
         display: 'flex',
         justifyContent: 'center',
      },

      Cell: ({ row }) => (
         <ProcessedCheckbox
            variant="applications"
            updateFn={APPLICATIONS_THUNKS.updateApplication}
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
         paddingLeft: '40px',
      },

      Cell: ({ row }) => (
         <Delete
            deleteFn={APPLICATIONS_THUNKS.deleteApplication}
            id={row.original.id}
            name={row.original.username}
            disabled={row.original.processed}
         />
      ),
   },
]

const SPECIALISTS_COLUMN = [
   {
      Header: '№',
      accessor: 'id',

      style: {
         padding: '19px 0 20px 20px',
         fontSize: '16px',
         flex: '0.2',
         paddingLeft: '20px',
         fontWeight: '700',
      },

      Cell: ({ row }) => (
         <Typography
            style={{
               color: row.original.isActive ? 'black' : '#707070',
            }}
         >
            {row.original.id}
         </Typography>
      ),
   },

   {
      Header: 'Статус',

      style: {
         padding: '19px 0 20px',
         flex: 0.38,
         fontWeight: '700',
      },

      Cell: ({ row }) => <SpecialistSwicher {...row.original} />,
   },

   {
      Header: 'Специалист',
      accessor: 'specialists',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         display: 'flex',
         flex: 0.7,
      },

      tdStyle: {
         fontWeight: '500',
      },

      Cell: ({ row }) => <SpecialistInfo {...row.original} />,
   },

   {
      Header: 'Отделение',
      accessor: 'department',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.51,
      },

      Cell: ({ row }) => (
         <Typography
            style={{
               color: row.original.isActive ? 'black' : '#707070',
            }}
         >
            {row.original.department}
         </Typography>
      ),
   },

   {
      Header: 'Расписание до',
      accessor: 'endDateWork',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.99,
      },

      Cell: ({ row }) => (
         <Typography
            style={{
               color: row.original.isActive ? 'black' : '#707070',
            }}
         >
            {format(new Date(row.original.endDateWork), 'd MMMM yyyy г.', {
               locale: ru,
            })}
         </Typography>
      ),
   },

   {
      Header: 'Действия',
      accessor: 'totalDiscount',

      style: {
         padding: '19px 10px 20px 10px',
         flex: 0.2,
         fontWeight: '700',
      },

      tdStyle: {
         display: 'flex',
         justifyContent: 'center',
      },

      Cell: ({ row }) => <SpecialistActions {...row.original} />,
   },
]

export {
   ONLINE_APPOINTMENTS_COLUMN,
   SCHEDULE_COLUMN,
   PATIENTS_COLUMN,
   COLUMNS,
   APPLICATIONS_COLUMN,
   SPECIALISTS_COLUMN,
}
