import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import Product from '../components/shop/Product';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section className="shop container">
      <ul className="shop-container row">
        {products
          ? products.map((product) => {
              return <Product product={product} key={product.id} />;
            })
          : null}
      </ul>
    </section>
  );
};
export default Shop;
