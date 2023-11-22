import React from 'react'
import ProductCard from '../productcard/ProductCard'
import { productsContext } from '../contextApi/ProductsContext';

 
const DisplayCard = () => {
    const{product}= productsContext();
  return (
    <>
     <ProductCard product={product}/>
    </>
  )
}

export default DisplayCard