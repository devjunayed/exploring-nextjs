/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react'

const error = ({error, reset}: any) => {
  return (
    <div className='flex gap-10 flex-col min-h-[85vh] justify-center items-center '>
      <h1 className='text-xl'>Something Went Wrong</h1>
      <p className='text-red-400'>{error.message}</p>
      <button className='btn btn-accent' onClick={() => {reset()}}>Try Again</button>
    </div>
  )
}

export default error