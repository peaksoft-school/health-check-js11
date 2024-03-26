import { Suspense as ReactSuspense } from 'react'
import Loading from '../components/Loading'

const Suspense = ({ children }) => (
   <ReactSuspense fallback={<Loading />}>{children}</ReactSuspense>
)

export default Suspense
