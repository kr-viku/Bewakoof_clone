import React from 'react'
import './ProductCard.css'
const ProductCard = ({data}) => {
    console.log(data);
  return (
    <div className='product-container'>
        {
            data?.map((product)=>(
                <div>
                    <img src={product.displayImage}/>
                </div>
            ))
        }
    </div>
  )
}

export default ProductCard