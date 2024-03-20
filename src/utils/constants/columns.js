import { Box, Typography } from '@mui/material'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import DeleteSelected from '../../components/UI/admin/DeleteSelected'
import ProcessedCheckbox from '../../components/UI/admin/ProcessedCheckbox'
import LocalDate from '../../components/UI/admin/LocalDate'
import Delete from '../../components/UI/admin/Delete'
import { PATIENTS_THUNKS } from '../../store/slices/patients/patientsThunk'
import LinkPatient from '../../components/UI/admin/LinkPatient'
import { ONLINE_APPOINTMENTS_THUNK } from '../../store/slices/online-appointments/onlineAppointmentThunk'
import { ONLINE_APPOINTMENTS_ACTIONS } from '../../store/slices/online-appointments/onlineAppointmentsSlice'
import SelectAll from '../../components/UI/admin/SelectAll'
import { APPLICATION_THUNK } from '../../store/slices/application/applicationThunk'
import { formatPhoneNumberWithSpaces } from '../helpers'
import {
   handleIsChecked,
   handleIsCheckedItem,
   handleRemoveChecked,
} from '../../store/slices/application/aplicationSlice'
import SelectSeparately from '../../components/UI/admin/SelectSeparately'
import SpecialistSwicher from '../../components/admin/specialists/SpecialistSwicher'
import SpecialistInfo from '../../components/admin/specialists/SpecialistInfo'
import SpecialistActions from '../../components/admin/specialists/SpecialistActions'

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

      Cell: ({ row }) => (
         <Typography
            style={{
               color: row.original.processed ? 'black' : '#707070',
            }}
         >
            {row.index + 1}
         </Typography>
      ),
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

      Cell: ({ row }) => (
         <Typography
            style={{
               color: row.original.processed ? 'black' : '#707070',
            }}
         >
            {row.original.fullName}
         </Typography>
      ),
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
         return (
            <Box
               style={{
                  color: row.original.processed ? 'black' : '#707070',
               }}
            >
               {formatPhoneNumberWithSpaces(phoneNumber)}
            </Box>
         )
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

      Cell: ({ row }) => (
         <Typography
            style={{
               color: row.original.processed ? 'black' : '#707070',
            }}
         >
            {row.original.email}
         </Typography>
      ),
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

      Cell: ({ row }) => (
         <Typography
            style={{
               color: row.original.processed ? 'black' : '#707070',
            }}
         >
            {row.original.facility}
         </Typography>
      ),
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

      Cell: ({ row }) => (
         <Typography
            style={{
               color: row.original.processed ? 'black' : '#707070',
            }}
         >
            {row.original.specialist}
         </Typography>
      ),
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
      },

      Cell: ({ row }) => (
         <Typography
            style={{
               color: row.original.processed ? 'black' : '#707070',
            }}
         >
            <LocalDate row={row} />
         </Typography>
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
               text="запись"
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
               text="пациента"
            />
         )
      },
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

      Cell: ({ row }) => (
         <Typography
            style={{
               color: row.original.processed ? 'black' : '#707070',
            }}
         >
            {row.index + 1}
         </Typography>
      ),
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

      Cell: ({ row }) => (
         <Typography
            style={{
               color: row.original.processed ? 'black' : '#707070',
            }}
         >
            {row.original.name}
         </Typography>
      ),
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
         <Box
            style={{
               color: row.original.processed ? 'black' : '#707070',
            }}
         >
            {format(new Date(row.original.date), 'dd.MM.yy')}{' '}
         </Box>
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
         return (
            <Box
               style={{
                  color: row.original.processed ? 'black' : '#707070',
               }}
            >
               {formatPhoneNumberWithSpaces(number)}
            </Box>
         )
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
            text="заявку"
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
         fontWeight: '600',
         flex: 0.99,
         fontSize: '16px',
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
   APPLICATIONS_COLUMN,
   SPECIALISTS_COLUMN,
}
