import React from 'react'

const ProductCard = ({products}) => {
  return (
    <div className='products'>
        <div>
            <h2>{products.pname}</h2>
            <h3>{products.des}</h3>
            <p>{products.stock}</p>
            <p>{products.cat}</p>
            <p>{products.price}</p>
        </div>
          
    </div>
  )
}

export default  ProductCard;