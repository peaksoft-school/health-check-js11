import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { NavLink } from 'react-router-dom'
import { format } from 'date-fns'
import SelectSeparately from '../../components/UI/admin/SelectSeparately'
import DeleteSelected from '../../components/UI/admin/DeleteSelected'
import SelectAll from '../../components/UI/admin/SelectAll'
import ProcessedCheckbox from '../../components/UI/admin/ProcessedCheckbox'
import LocalDate from '../../components/UI/admin/LocalDate'
import Delete from '../../components/UI/admin/Delete'
import { PATIENTS_THUNKS } from '../../store/slices/patients/patientsThunk'
import LinkPatient from '../../components/UI/admin/LinkPatient'
import { APPOINTMENTS_THUNK } from '../../store/slices/online-appointments/appointmentThunk'
import { APPOINTMENTS_ACTIONS } from '../../store/slices/online-appointments/appointmentsSlice'
import { formatPhoneNumberWithSpaces } from '../helpers'
import {
   handleIsChecked,
   handleIsCheckedItem,
   handleRemoveChecked,
} from '../../store/slices/application/aplicationSlice'
import { EditIcon } from '../../assets/icons'
import SpecialistsDelete from '../../components/specialists/SpecialistsDelete'
import SpecialistSwicher from '../../components/specialists/SpecialistSwicher'
import { APPLICATION_THUNK } from '../../store/slices/application/applicationThunk'

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
            disabled={!row.original.processed}
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
         fontSize: '5px',
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

const SPECIALISTS_COLUMN = [
   {
      Header: '№',
      accessor: 'id',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: '0.2',
      },

      tdStyle: {
         fontWeight: '600',
      },
   },
   {
      Header: 'Статус',
      style: {
         padding: '19px 0 20px',
         flex: 0.38,
         fontWeight: '600',
      },

      tdStyle: {
         justifyContent: 'end',
      },

      Cell: ({ row }) => {
         return <SpecialistSwicher {...row.original} />
      },
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

      Cell: ({ row }) => {
         return (
            <Box style={{ display: 'flex', alignItems: 'center' }}>
               <img
                  src={row.original.image}
                  alt="doctor"
                  style={{
                     width: '38px',
                     height: '38px',
                     marginRight: '13px',
                     borderRadius: '50%',
                  }}
               />

               <div>
                  <Typography variant="span">
                     <span
                        style={{
                           color: '#222222',
                           fontSize: '16px',
                        }}
                     >
                        {row.original.firstName} {row.original.lastName}
                     </span>
                     <br />
                     <span style={{ color: '#959595', fontSize: '14px' }}>
                        {row.original.position}
                     </span>
                  </Typography>
               </div>
            </Box>
         )
      },
   },

   {
      Header: 'Отделение',
      accessor: 'department',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.51,
      },

      Cell: ({ value }) => (
         <span style={{ fontWeight: '500', fontSize: '16px', color: 'black' }}>
            {value}
         </span>
      ),
   },

   {
      Header: 'Расписание до',
      accessor: 'endDateWork',
      Cell: ({ value }) => {
         const date = new Date(value)

         const months = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря',
         ]

         const day = date.getDate()

         const month = months[date.getMonth()]

         const year = date.getFullYear()

         const formattedDate = `${day} ${month} ${year} г.`

         return <span style={{ color: 'black' }}>{formattedDate}</span>
      },
      style: {
         padding: '19px 0 20px',
         fontWeight: '600',
         flex: 0.99,
         fontSize: '16px',
      },
   },
   {
      Header: 'Действия',
      accessor: 'totalDiscount',

      style: {
         padding: '19px 10px 20px 10px',
         fontWeight: '600',
         flex: 0.2,
      },

      tdStyle: {
         display: 'flex',
         justifyContent: 'center',
      },

      Cell: ({ row }) => (
         <div
            style={{
               display: 'flex',
               alignItems: 'center',
               gap: '30px',
            }}
         >
            <NavLink to={row.original.id.toString()}>
               <EditIcon />
            </NavLink>
            <SpecialistsDelete {...row.original} />
         </div>
      ),
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
