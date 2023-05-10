import React, { useContext } from 'react';
import { CategoriesContext } from '../contexts/CategoriesContext';
import CategoryShowcase from '../components/shop/CategoryShowcase';

const Listing = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <section className="shop container">
      <h1>Listing</h1>
      <ul className="shop-container row">
        {categoriesMap ? (
          Object.keys(categoriesMap).map((item, i) => {
            const prods = categoriesMap[item];
            return <CategoryShowcase title={item} prods={prods} key={i} />;
          })
        ) : (
          <h2 className="shop-loading">Loading</h2>
        )}
      </ul>
    </section>
  );
};
export default Listing;
