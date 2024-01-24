// import './App.css'
// import CustomTable from './components/UI/Table'

// const data = [
//    { firstName: 'John', lastName: 'Doe', age: 25, checkbox: false },
//    { firstName: 'Jane', lastName: 'Smith', age: 32, checkbox: false },
//    { firstName: 'Bob', lastName: 'Johnson', age: 45, checkbox: false },
//    // ...другие данные
// ]
// const columns = [
//    {
//       Header: 'First Name',
//       accessor: 'firstName', // имя свойства из объекта данных
//    },
//    {
//       Header: 'Last Name',
//       accessor: 'lastName',
//    },
//    {
//       Header: 'Age',
//       accessor: 'age',
//    },
//    // ...другие столбцы
// ]

// const App = () => {
//    return (
//       <div>
//          {/* health-check-js11\ */}

//          <CustomTable columns={columns} data={data} />
//       </div>
//    )
// }

// export default App

import { useMemo } from 'react'
import UITable from './components/UI/Table'

const App = () => {
   const data = useMemo(
      () => [
         { col1: 'Hello', col2: 'World', checkbox: false, radio: false },
         { col1: 'React', col2: 'Table', checkbox: false, radio: true },
         { col1: 'Example', col2: 'Component', checkbox: false, radio: true },
      ],
      []
   )

   const columns = useMemo(
      () => [
         { Header: 'Checkbox', accessor: 'checkbox' },
         { Header: 'Radio', accessor: 'radio' },
         { Header: 'Column 1', accessor: 'col1' },
         { Header: 'Column 2', accessor: 'col2' },
      ],
      []
   )

   return (
      <div>
         <UITable columns={columns} data={data} />
      </div>
   )
}

export default App
