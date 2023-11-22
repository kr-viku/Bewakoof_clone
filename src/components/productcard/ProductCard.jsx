import React from 'react'
import './ProductCard.css'
import Card from '../card/Card'
const ProductCard = ({products}) => {
    // console.log(data);
    // console.log('products' ,products)
  return (

    
    <div className='product-container'>
        {
            products?.map((product)=>(
               <Card product={product}/>
            ))
        }
    </div>
  )
}

export default ProductCard