import classNames from 'classnames';
import {
  CategoryBg,
  CategoryBody,
  CategoryText,
  CategoryTitle,
  CategoryContainer,
} from '../styles/category';

function Category({ title, imageUrl, position }) {
  const sizes = classNames('', {
    'category--small': position < 3,
    'category--medium': position > 2,
  });
  return (
    <CategoryContainer to={`./listing/${title}`} className={sizes}>
      <CategoryBg imageurl={imageUrl}></CategoryBg>
      <CategoryBody>
        <CategoryTitle className="category-title">{title}</CategoryTitle>
        <CategoryText className="category-text">Shop Now</CategoryText>
      </CategoryBody>
    </CategoryContainer>
  );
}

export default Category;
