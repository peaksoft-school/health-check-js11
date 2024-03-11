import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, styled } from '@mui/material'
import { useDebounce } from 'use-debounce'
import { SCHEDULE_THUNK } from '../../../store/slices/schedule/scheduleThunk'
import { SCHEDULE_COLUMN } from '../../../utils/constants/columns'
import TableSchedule from '../../../components/UI/ScheduleTable'
import SearchInput from '../../../components/UI/inputs/SearchInput'

const SchedulePage = () => {
   const { schedules } = useSelector((state) => state.schedule)

   const [searchName, setSearchName] = useState('')

   const dispatch = useDispatch()

   const handleSearchChange = (e) => setSearchName(e.target.value)

   const [debouncedSearchText] = useDebounce(searchName, 1000)

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
      dispatch(SCHEDULE_THUNK.getAllSchedules())
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

         <TableSchedule columns={SCHEDULE_COLUMN} rows={schedules} />
      </>
   )
}

export default SchedulePage

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
