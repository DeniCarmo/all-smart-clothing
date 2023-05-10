import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import Product from './Product';
import { useParams } from 'react-router-dom';

function CategoryListing() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [prods, setProds] = useState([]);

  useEffect(() => {
    setProds(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <section className="category-listing container">
      <div className="row">
        <h1 className="category-listing-title col-12">{category}</h1>
        {prods ? (
          prods.map((prod) => <Product key={prod.id} product={prod} />)
        ) : (
          <h2>Loading data</h2>
        )}
      </div>
    </section>
  );
}

export default CategoryListing;
