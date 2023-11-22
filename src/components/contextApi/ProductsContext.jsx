import React, { createContext, useContext } from 'react';

const StoreProductContext = createContext({});

const ProductsContext = ({children}) => {
    
    const[products, setProducts]= useState([]);
  return (
   <>
   <ProductsContext.Provider value={{products, setProducts}}>
     {children}
   </ProductsContext.Provider>
   </>
  )
}

export const productsContext =()=> useContext(StoreProductContext);

export default ProductsContext;