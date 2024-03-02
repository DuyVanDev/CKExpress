import { useGlobalState } from '@/hooks'
import React from 'react'

const Slogan = ({setting}) => {
  return (
    <div className='text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary  to-primary py-10 max-sm:px-2 max-md:px-2'>
        <h3 className='text-4xl font-bold mb-2 text-white'>{setting?.CompanyName}</h3>
        <p className='text-xl font-medium text-white'>{setting?.Slogan}</p>
    </div>
  )
}

export default Slogan