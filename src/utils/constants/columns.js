import { Switch, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SelectSeparately from '../../components/online-appointments/SelectSeparately'
import DeleteButton from '../../components/online-appointments/DeleteButton'
import DeleteSelected from '../../components/online-appointments/DeleteSelected'
import SelectAll from '../../components/online-appointments/SelectAll'
import ProcessedCheckbox from '../../components/online-appointments/ProcessedCheckbox'
import SpecialistsDelete from '../../components/specialists/SpecialistsDelete'
import Switcher from '../../components/UI/Switcher'

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
      accessor: 'status',

      style: {
         padding: '19px 0 20px',
         flex: 0.38,
         fontWeight: '600',
         // display: 'flex',
      },

      tdStyle: {
         // display: 'flex',
         justifyContent: 'end',
      },

      Cell: ({ row }) => {
         return <Switcher {...row.original} />
      },
   },

   {
      Header: 'Специалист',
      accessor: 'surname',
      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         display: 'flex',
         flex: 0.4,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   {
      Header: 'Отделение',
      accessor: 'doctor',

      style: {
         padding: '19px 0 20px',
         fontWeight: '700',
         flex: 0.4,
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
         flex: 0.5,
      },

      tdStyle: {
         fontWeight: '500',
      },
   },

   // {
   //    Header: 'Расписание до',
   //    accessor: 'dates',

   //    style: {
   //       padding: '19px 0 20px',
   //       fontWeight: '700',
   //       flex: 0.91,
   //    },

   //    tdStyle: {
   //       fontWeight: '500',
   //    },

   //    Cell: ({ row }) => (
   //       <Box>
   //          <Typography variant="p">{row.original.localDate}</Typography>
   //       </Box>
   //    ),
   // },
   {
      Header: 'Действия',
      accessor: 'totalDiscount',

      style: {
         padding: '19px 10px 20px 10px',
         fontWeight: '700',
         flex: 0.2,
      },

      tdStyle: {
         display: 'flex',
         justifyContent: 'center',
      },

      Cell: ({ row }) => {
         return <SpecialistsDelete {...row.original} />
      },
   },
]

export { ONLINE_APPOINTMENTS_COLUMN, COLUMNS, SPECIALISTS_COLUMN }
