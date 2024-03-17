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
import { memo, useMemo } from 'react'
import { NoDataImage } from '../../assets/images'

const Table = ({ columns: headers, data }) => {
   if (!data || data.length === 0) {
      return (
         <StyledAbsence>
            <img src={NoDataImage} alt="No Data" className="no-data-image" />
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

   '& > .table-head': {
      height: '3.688rem',
   },
})

const StyledAbsence = styled(Box)(() => ({
   textAlign: 'center',

   '& > .no-data-image': {
      width: '50%',
      height: '30%',
   },
}))
