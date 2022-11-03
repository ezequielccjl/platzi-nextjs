import React from 'react'
import {useRouter} from 'next/router'

const ProductItem = () => {
    // const router = useRouter()
    // router.query.id // router.query.{fileName}
    
    //Destructuring
    const {
        query: {id}
    } = useRouter()

  return (
    <div>
        <span>ProductItem {id}</span>
    </div>
  )
}

export default ProductItem