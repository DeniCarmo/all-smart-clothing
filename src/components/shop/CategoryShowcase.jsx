import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

const CategoryShowcase = ({ title, prods }) => {
  return (
    <div className="category-showcase col-12">
      <div className="row">
        <Link to={`./${title}`} className="category-showcase-title col-12">
          {title}
        </Link>
        {prods.map((item, i) => (i < 4 ? <Product key={item.id} product={item} /> : null))}
      </div>
    </div>
  );
};
export default CategoryShowcase;
