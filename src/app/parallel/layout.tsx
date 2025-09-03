import React, { ReactNode } from 'react'
import { LayoutProps } from '../../../.next/types/app/layout'

interface TLayoutProps extends LayoutProps{
    posts: ReactNode,
    blogs: ReactNode
}

const layout = ({children, posts, blogs}: TLayoutProps) => {
  return (
    <div className='flex gap-2'>
        {blogs}
        {children}
        {posts}
    </div>
  )
}

export default layout