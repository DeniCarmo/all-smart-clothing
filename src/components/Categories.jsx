import { useEffect, useState } from 'react';
import Category from './Category';
import { CategoriesContainer } from '../styles/categories';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('http://localhost:3030/categories');
      const data = await res.json();
      return setCategories(data);
    };

    fetchCategories();
    return;
  }, []);

  return (
    <CategoriesContainer className="container">
      {categories
        ? categories.map(({ title, imageUrl, id }, i) => {
            return <Category title={title} imageUrl={imageUrl} position={i} key={id} />;
          })
        : null}
    </CategoriesContainer>
  );
};
export default Categories;
