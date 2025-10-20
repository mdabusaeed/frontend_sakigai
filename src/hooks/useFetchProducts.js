import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProduct = (
  currentPage,
  priceRange,
  selectedCategory,
  searchQuery,
  sortOrder
) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const url = `/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}`;
      try {
        const response = await apiClient.get(url);
        const data = response.data;

        // Ensure we're handling the data format correctly
        if (data && Array.isArray(data)) {
          setProducts(data);
          setTotalPages(1); // If no pagination info, assume 1 page
        } else if (data && Array.isArray(data.results)) {
          setProducts(data.results);
          // Calculate total pages safely
          if (data.count && data.results.length > 0) {
            setTotalPages(Math.ceil(data.count / data.results.length));
          } else {
            setTotalPages(1);
          }
        } else {
          // Fallback for unexpected data format
          setProducts([]);
          setTotalPages(1);
        }
      } catch (error) {
        console.log("Error fetching products:", error);
        setProducts([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage, priceRange, selectedCategory, searchQuery, sortOrder]);

  return { products, loading, totalPages };
};

export default useFetchProduct;