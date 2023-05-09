import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  useEffect(() => {
    const fetchShopData = async () => {
      const res = await fetch('http://localhost:3030/hats');
      const data = await res.json();
      return setProducts(data);
    };

    fetchShopData();
    return;
  }, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
