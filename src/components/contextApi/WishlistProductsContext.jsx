import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";
const StoreWishlistProductContext = createContext(null);

const WishlistProductsContext = ({children}) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  const fetchingWishlistProducts = async () => {
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
        {
          headers: {
            projectId: "4stjj1sb1x5a",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjFmNjBhMWQ4NzkyNjJkMmYzYjFlNyIsImlhdCI6MTcwMTUzNjAxMywiZXhwIjoxNzMzMDcyMDEzfQ.z5QUj3-xDAISsrGF5c02BVpH07mElJz85OBHuOumYks",
          },
        }
      );

      console.log(response);
    } 
    catch (e) {}
  };
  
  return (
    <StoreWishlistProductContext.Provider
      value={{ wishlistProducts, setWishlistProducts, fetchingWishlistProducts }}
    >
      {children}
    </StoreWishlistProductContext.Provider>
  );
};

export default WishlistProductsContext;

export const wishlistProductsContext = () =>useContext(StoreWishlistProductContext);
