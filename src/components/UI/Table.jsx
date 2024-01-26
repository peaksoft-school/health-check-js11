import { useTable } from 'react-table'
import {
   TableContainer,
   TableHead,
   TableRow,
   TableCell,
   TableBody,
   Table as MuiTable,
   styled,
} from '@mui/material'
import { Height } from '@mui/icons-material'

const Table = ({ columns, data }) => {
   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({
         columns,
         data,
      })

   return (
      <StyledTableContainer>
         <MuiTable {...getTableProps()}>
            <TableHead className="table-header">
               {headerGroups.map((headerGroup, i) => (
                  <TableRow
                     {...headerGroup.getHeaderGroupProps()}
                     key={headerGroup.headers[i].Header}
                  >
                     {headerGroup.headers.map((column) => (
                        <TableCell
                           {...column.getHeaderProps({
                              style: { ...column.style },
                           })}
                           key={column.id}
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
                     <TableRow
                        {...row.getRowProps()}
                        key={row.id}
                        index={row.index}
                     >
                        {row.cells.map((cell) => (
                           <TableCell
                              {...cell.getCellProps({
                                 style: {
                                    ...cell.column.style,
                                 },
                              })}
                              key={cell.column.id}
                           >
                              {cell.render('Cell')}
                           </TableCell>
                        ))}
                     </TableRow>
                  )
               })}
            </TableBody>
         </MuiTable>
      </StyledTableContainer>
   )
}

export default Table

const StyledTableContainer = styled(TableContainer)({
   borderRadius: '6px',
   display: 'flex',
   justifyContent: 'center',
   border: '1px solid',
   // width: '1300px',
   '& .table-header': {
      Height: '60px',
   },
})

// const StyledCell = styled(TableCell)({
//    borderBottom: '1px solid #ddd',
//    textAlign: 'left',
// })
