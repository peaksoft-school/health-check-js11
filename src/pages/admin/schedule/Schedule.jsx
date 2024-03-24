import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, styled } from '@mui/material'
import { useDebounce } from 'use-debounce'
import { SCHEDULE_THUNK } from '../../../store/slices/schedule/scheduleThunk'
import { SCHEDULE_COLUMN } from '../../../utils/constants/columns'
import SearchInput from '../../../components/UI/inputs/SearchInput'
import ScheduleTable from '../../../components/admin/schedule/ScheduleTable'

const Schedule = () => {
   const { schedules } = useSelector((state) => state.schedule)

   const [searchName, setSearchName] = useState('')

   const dispatch = useDispatch()

   const handleSearchChange = (e) => setSearchName(e.target.value)

   const [debouncedSearchText] = useDebounce(searchName, 1000)

   const tableRef = useRef(null)

   useEffect(() => {
      if (debouncedSearchText !== undefined) {
         dispatch(
            SCHEDULE_THUNK.scheduleSearch({
               searchName: debouncedSearchText,
            })
         )
      }
   }, [debouncedSearchText])

   useEffect(() => {
      dispatch(SCHEDULE_THUNK.getSchedules())
   }, [dispatch])

   return (
      <>
         <StyledInputContainer className="input-container">
            <SearchInput
               placeholder="Поиск"
               className="search-input"
               value={searchName}
               onChange={handleSearchChange}
            />
         </StyledInputContainer>

         <div ref={tableRef}>
            <ScheduleTable columns={SCHEDULE_COLUMN} rows={schedules} />
         </div>
      </>
   )
}

export default Schedule

const StyledInputContainer = styled(Box)(() => ({
   marginBottom: '20px',

   '& .search-input': {
      height: '2.5rem',
      padding: '0rem 0.3rem',
      display: 'inline-flex',
      justifyContent: 'center',
      width: '100%',
   },
}))
