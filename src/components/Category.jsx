import { Link } from 'react-router-dom';
import classNames from 'classnames';

function Category({ title, imageUrl, position }) {
  const sizes = classNames('category', {
    'category--small': position < 3,
    'category--medium': position > 2,
  });
  return (
    <Link to={title} className={sizes}>
      <div className="category-bg" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="category-body">
        <h2 className="category-title">{title}</h2>
        <p className="category-text">Shop Now</p>
      </div>
    </Link>
  );
}

export default Category;
