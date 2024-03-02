import Loading from '@/components/Loading'
import React, { Suspense } from 'react'

const PublicRoute = ({children}) => {
  return (
    <Suspense fallback={<Loading />}>{children}</Suspense>
  )
}

export default PublicRoute