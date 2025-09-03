import React from 'react'

const CardError = ({text}: {text: string}) => {
  return (
    <div className="h-100 flex items-center justify-center w-100 border bg-red-500 rounded-xl">{text}</div>
  )
}

export default CardError