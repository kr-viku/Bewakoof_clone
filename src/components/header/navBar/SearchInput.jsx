import React, { useEffect, useState } from 'react'

import SearchIcon from "@mui/icons-material/Search";
import { useBaseApi } from '../../contextApi/BaseDomainContext';
import ProductCard from '../../productcard/ProductCard';
import { useNavigate } from 'react-router-dom';
import { productsContext } from '../../contextApi/ProductsContext';
const SearchInput = ({isSearching, setIsSearching}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    // const [searchResults, setSearchResults] = useState([]);

    const {products, setProducts} = productsContext();

    // console.log(setProducts, "setproducts");

    const baseApi = useBaseApi();

    // const[isSearching, setIsSearching]= useState(false);

  async function fetchingProducts() {
   
    if (searchTerm?.trim() ==="")
     {
      // If the search query is empty, clear the results and return
      setProducts([]);
      return;
     }


    setLoading(true);
    setError("");
    try 
    {
     
      const response = await fetch(
        `${baseApi}api/v1/ecommerce/clothes/products?search={"name":"${searchTerm}", "description":"${searchTerm}"}`,
        {
            headers: {
                projectID: "4stjj1sb1x5a",
            }
        }
        );
        
        const result = await response.json();
        // console.log("response", result.data);

       setProducts(result.data);

      //  console.log("response", result.data);
        // console.log('products', products);
        setLoading(false);
       
      }
      catch (e)
      {
        
        setError("Error fetching data. Please try again.");
        setLoading(false);
      }
  }

  // console.log(products, "products")
  useEffect(() => {
    fetchingProducts();
  }, [searchTerm]);


    function handleSearch(e) {
        const value = e.target.value;
        setSearchTerm(value);
        setIsSearching(true)
      }
  return (
    <div className="navbar-search-section">
        <SearchIcon className="search-icon" />
         <input
          placeholder="Search by product, category or collection"
          className="search-box"
          value={searchTerm} 
          onChange={handleSearch} 
        />
         
    </div>
  )
}

export default SearchInput