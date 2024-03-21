import { memo, useMemo } from 'react'
import { useTable } from 'react-table'
import {
   TableContainer,
   TableHead,
   TableRow,
   TableCell,
   TableBody,
   Table as MuiTable,
   styled,
   Box,
} from '@mui/material'
import { NoDataImage } from '../../assets/images'

const Table = ({ columns: headers, data }) => {
   if (!data || data.length === 0) {
      return (
         <StyledAbsence>
            <img src={NoDataImage} alt="no-data" />
         </StyledAbsence>
      )
   }

   const columns = useMemo(() => headers, [])

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
                     {...headerGroup.getHeaderGroupProps({
                        style: {
                           display: 'flex',
                           width: '100%',
                        },
                     })}
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
                        {...row.getRowProps({
                           style: {
                              display: 'flex',
                           },
                        })}
                        key={row.id}
                        index={row.index}
                     >
                        {row.cells.map((cell) => (
                           <TableCell
                              {...cell.getCellProps({
                                 style: {
                                    ...cell.column.style,
                                    ...cell.column.tdStyle,
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

   '& .MuiTableHead-root': {
      height: '3.688rem',
      borderBottom: '1px solid  rgba(224, 224, 224, 1)',
   },

   '& .MuiTableCell-root': {
      fontWeight: '600',
      border: 'none',
   },

   '& .MuiTableRow-root': {
      borderBottom: '1px solid  rgba(224, 224, 224, 1)',
   },

   '& .MuiTableRow-root:last-of-type': {
      borderBottom: 'none',
   },
})

const StyledAbsence = styled(Box)(() => ({
   textAlign: 'center',

   '& > img': {
      width: '600px',
      height: '600px',
   },
}))
