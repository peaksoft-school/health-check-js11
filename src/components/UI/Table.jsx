import { useTable, useRowSelect } from 'react-table'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import Switcher from './Switcher'

const UITable = ({ columns, data }) => {
   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      // selectedFlatRows,
   } = useTable(
      {
         columns,
         data,
      },
      useRowSelect
   )

   return (
      <Table {...getTableProps()} style={{ width: '100%' }}>
         <TableHead>
            {headerGroups.map((headerGroup) => (
               <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                     <TableCell
                        {...column.getHeaderProps()}
                        style={{
                           borderBottom: '1px solid black',
                           background: 'aliceblue',
                           padding: '8px',
                        }}
                     >
                        {column.render('Header')}
                     </TableCell>
                  ))}
               </TableRow>
            ))}
         </TableHead>
         <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
               prepareRow(row)
               return (
                  <TableRow {...row.getRowProps()}>
                     {row.cells.map((cell) => (
                        <TableCell
                           {...cell.getCellProps()}
                           style={{
                              borderBottom: '1px solid black',
                              padding: '8px',
                           }}
                        >
                           {cell.column.id === 'checkbox' ? (
                              <Switcher
                                 checked={row.isSelected}
                                 onChange={() => row.toggleRowSelected()}
                              />
                           ) : (
                              cell.render('Cell')
                           )}
                        </TableCell>
                     ))}
                  </TableRow>
               )
            })}
         </TableBody>
      </Table>
   )
}

export default UITable
