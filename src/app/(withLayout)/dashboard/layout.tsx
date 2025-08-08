import Footer from '@/components/Shared/Footer'
import React from 'react'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full overflow-y-hidden '>
        <div className='min-h-[calc(100vh-5rem-20px-16px)] flex justify-center items-center'>{children}</div>
        <Footer />
    </div>
  )
}

export default DashboardLayout