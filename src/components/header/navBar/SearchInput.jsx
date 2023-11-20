import React, { useEffect, useState } from 'react'

import SearchIcon from "@mui/icons-material/Search";
import { useBaseApi } from '../../contextApi/BaseDomainContext';
import ProductCard from '../../productcard/ProductCard';
const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const baseApi = useBaseApi();

  

  async function fetchingProducts() {
    if (searchTerm?.trim() === "") {
      // If the search query is empty, clear the results and return
      setSearchResults([]);
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
            },
        }
        );
        const result = await response.json();
        // console.log("response", result.data);

        setSearchResults(result.data);
        setLoading(false);
    }
    catch (e)
    {
        setError("Error fetching data. Please try again.");
        setLoading(false);
    }
  }


  useEffect(() => {
    fetchingProducts();
  }, [searchTerm]);


    function handleSearch(e) {
        const value = e.target.value;
        setSearchTerm(value);
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
          {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    <ProductCard data={searchResults} />
                </ul>
            )}
            {error && <p>{error}</p>}
    </div>
  )
}

export default SearchInput