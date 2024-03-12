import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import format from 'pretty-format'
import { NavLink } from 'react-router-dom'
import SelectSeparately from '../../components/online-appointments/SelectSeparately'
import DeleteButton from '../../components/online-appointments/DeleteButton'
import DeleteSelected from '../../components/online-appointments/DeleteSelected'
import SelectAll from '../../components/online-appointments/SelectAll'
import ProcessedCheckbox from '../../components/online-appointments/ProcessedCheckbox'
import SpecialistsDelete from '../../components/specialists/SpecialistsDelete'
import SelectAllApplication from '../../components/UI/admin/application/SelectAllAplication'
import SelectSeparatelyApplication from '../../components/UI/admin/application/SeelectSeparatelyAplications'
import DeleteSelectedApplication from '../../components/UI/admin/application/DeleteSelectedApplication'
import ApplicationCheckbox from '../../components/UI/admin/application/ApplicationCheckbox'
import DeleteApplication from '../../components/UI/admin/application/DeleteApplication'
import { EditIcon } from '../../assets/icons'
import SpocialistSwicher from '../../components/specialists/SpecialistSwicher'

const ONLINE_APPOINTMENTS_COLUMN = [
   {
      Header: <SelectAll />,
      accessor: 'checkbox',

      style: {
         padding: '17px 0 20px 17px',
         flex: 0.06,
      },

      Cell: ({ row }) => <SelectSeparately {...row.original} />,
   },

   {
      Header: <DeleteSelected />,
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
               appointmentId={row.original.appointmentId}
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
            <DeleteButton
               name={row.original.fullName}
               disabled={row.original.processed}
               appointmentId={row.original.appointmentId}
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
      Header: <SelectAllApplication />,
      accessor: 'checkbox',
      style: {
         padding: '17px 0 20px 17px',
         flex: 0.06,
      },
      Cell: ({ row }) => <SelectSeparatelyApplication {...row.original} />,
   },
   {
      Header: <DeleteSelectedApplication />,
      accessor: 'action',
      style: {
         padding: '17px 0 20px',
         flex: 0.06,
      },
   },
   {
      Header: '№',
      accessor: 'id',
      style: {
         padding: '17px 0 20px',
         fontWeight: '700',
         flex: 0.1,
      },
      tdStyle: {
         fontWeight: '500',
      },
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
         <ApplicationCheckbox
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
         <DeleteApplication
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
         return <SpocialistSwicher {...row.original} />
      },
   },

   {
      Header: 'Специалист',
      accessor: 'specialists',
      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         display: 'flex',
         flex: 0.6,
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
                        {' '}
                        {row.original.firstName} {row.original.lastName}
                     </span>
                     <br />
                     <span style={{ color: '#959595', fontSize: '14px' }}>
                        {' '}
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
         flex: 0.4,
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
         flex: 0.91,
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
   COLUMNS,
   APPLICATIONS_COLUMN,
   SPECIALISTS_COLUMN,
}
