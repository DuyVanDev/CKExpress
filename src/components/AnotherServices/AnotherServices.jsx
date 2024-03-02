import images from '@/config/images'
import { Button } from 'antd'
import React from 'react'

const AnotherServices = () => {
  return (
    <div className='flex flex-col gap-4'>
        <p className='text-2xl font-medium'>Dịch vụ khác</p>
        <p className='font-semibold'>Chia sẻ lên mạng xã hội</p>
        <div className='flex items-center gap-4'>
            <img src={images.FaceBookIcon} alt="" />
            <img src={images.GoogleIcon} alt="" />
            <img src={images.TwiterIcon} alt="" />
        </div>
        <Button type='primary' danger className='text-white font-medium'>Tạo vận đơn</Button>
    </div>
  )
}

export default AnotherServices