import React from 'react'
import { BounceLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <BounceLoader color="#f97316" />
    </div>
  )
}

export default Loading