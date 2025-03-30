import React from 'react'

type Params = Promise<{ id: string }>

const Product = async ({ params }: { params: Params }) => {
    const { id }  = await params;
  return (
    <div>Product: {id}</div>
  )
}

export default Product