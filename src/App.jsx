import './App.css'
import { DeleteIcon } from './assets/icons'
import Table from './components/UI/Table'

const data = [
   {
      id: 1,
      first_name: 'Alice',
      last_name: 'Johnson',
      email: 'dgeibel0@twitter.com',
      gender: 'Male',
      date_of_birth: '1990-05-12',
      age: 25,
      country: 'Америка',
      phone: '1111111',
   },
   {
      id: 2,
      first_name: 'Boris',
      last_name: 'Ivanov',
      email: 'tmullineux1@sina.com.cn',
      gender: 'Male',
      date_of_birth: '1982-11-07',
      age: 47,
      country: 'Россия',
      phone: '2222222',
   },
   {
      id: 3,
      first_name: 'Chen',
      last_name: 'Wei',
      email: 'ksexten2@a8.net',
      gender: 'Male',
      date_of_birth: '1979-12-01',
      age: 60,
      country: 'Китай',
      phone: '3333333',
      Cell: () => <DeleteIcon />,
   },
   {
      id: 4,
      first_name: 'David',
      last_name: 'Smith',
      email: 'sconwell3@intel.com',
      gender: 'Female',
      date_of_birth: '1995-04-20 ',
   },
   {
      id: 5,
      first_name: 'Emily',
      last_name: 'Brown',
      email: 'magett4@bloglovin.com',
      gender: 'Female',
      date_of_birth: '2001-09-15',
      age: 22,
      country: 'Германия',
      phone: '5555555',
   },
]

const COLUMNS = [
   {
      Header: 'Id',
      accessor: 'id',
      Cell: ({ row }) => {
         return (
            <div title="Перейти к оплате">
               {row.original.fullName || "Don't have"}
            </div>
         )
      },
   },
   {
      Header: 'Имя',
      accessor: 'first_name',
      Cell: ({ row }) => {
         return (
            <div title="Перейти к оплате">
               {row.original.fullName || "Don't have"}
            </div>
         )
      },
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
      Cell: ({ row }) => {
         return <DeleteIcon {...row.original} />
      },
   },
]

const App = () => {
   return (
      <div>
         health-check-js11
         <Table data={data} columns={COLUMNS} />
      </div>
   )
}

export default App
