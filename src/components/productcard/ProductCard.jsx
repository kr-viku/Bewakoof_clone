import React from 'react'
import './ProductCard.css'
const ProductCard = ({products}) => {
    // console.log(data);
    console.log('products' ,products)
  return (

    
    <div className='product-container'>
        {
            products?.map((product)=>(
                <div>
                    <img src={product.displayImage}/>
                </div>
            ))
        }
    </div>
  )
}

export default ProductCard