import React from 'react'
import CardProduct from './CardProduct'
import Products from './Products'

const Categories = ({products}) => {
  return (
    <div>
        <h1>{products.countByCategory.consolas}</h1>
        
    </div>
  )
}

export default Categories