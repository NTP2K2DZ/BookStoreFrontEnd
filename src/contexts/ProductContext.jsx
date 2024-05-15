import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const ProductContext = createContext();
function ProductProvier({ children }) {
  const [product, setProduct] = useState([])     
  useEffect(() => {
    // Gọi API khi component được render lần đầu tiên
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 
  return <ProductContext.Provider>{ children }</ProductContext.Provider>
}

export default ProductContext