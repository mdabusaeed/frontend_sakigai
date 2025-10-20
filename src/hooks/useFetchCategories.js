import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient.get("/categories")
      .then((res) => {
        // Ensure we're getting an array from the response
        const data = res.data;
        if (Array.isArray(data)) {
          setCategories(data);
        } else if (data && Array.isArray(data.results)) {
          // Handle paginated response format
          setCategories(data.results);
        } else {
          // Fallback to empty array if format is unexpected
          setCategories([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setCategories([]); // Fallback to empty array on error
      });
  }, []);

  return categories;
};

export default useFetchCategories;