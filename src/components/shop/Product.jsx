import { useContext } from 'react';
import Button from '../Button';
import { CartToggleContext } from '../../contexts/CartOpenContext';

function Product({ product }) {
  const { addToCart } = useContext(CartToggleContext);

  const addProdtoCart = () => addToCart(product);

  return (
    <div className="product col-12 col-lg-3">
      <img src={product.imageUrl} alt={product.name} className="product-img" />
      <div className="product-details">
        <span className="product-details-name">{product.name}</span>
        <span className="product-details-price">${product.price.toFixed(2)}</span>
      </div>
      <Button buttonType="inverted" onClick={addProdtoCart}>
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
