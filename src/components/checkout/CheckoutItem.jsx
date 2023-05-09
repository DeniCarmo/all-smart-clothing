import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/CartOpenContext';

const CheckoutItem = ({ item }) => {
  const { name, amount, imageUrl, price } = item;

  const { addToCart, removeItemFromCart, removeItem } = useContext(CartToggleContext);

  return (
    <div className="checkout-item">
      <div className="checkout-item-img">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="checkout-item-name">{name}</span>

      <span className="checkout-item-quantity">
        <div className="checkout-item-quantity-arrow" onClick={() => removeItemFromCart(item)}>
          &#10094;
        </div>

        <span className="checkout-item-quantity-value">{amount}</span>

        <div className="checkout-item-quantity-arrow" onClick={() => addToCart(item)}>
          &#10095;
        </div>
      </span>

      <div className="checkout-item-price">${price.toFixed(2)}</div>

      <div className="checkout-item-remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
