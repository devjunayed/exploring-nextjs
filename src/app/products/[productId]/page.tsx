import React from 'react'

const DynamicPage = ({params}:{params: {productId: string}}) => {
    console.log(params)
    
  return (
    <div>DynamicPage {params.productId}</div>
  )
}

export default DynamicPage