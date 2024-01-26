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
import { memo, useMemo } from 'react'

const Table = ({ tableHeader, data }) => {
   const columns = useMemo(() => tableHeader, [])

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({
         columns,
         data,
      })

   return (
      <StyledTableContainer>
         <MuiTable {...getTableProps()}>
            <TableHead className="table-head">
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

export default memo(Table)

const StyledTableContainer = styled(TableContainer)({
   borderRadius: '6px',
   display: 'flex',
   justifyContent: 'center',

   '& > .table-head': {
      height: '3.688rem',
   },
})
