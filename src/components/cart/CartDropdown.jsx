import { useContext } from 'react';
import Button from '../Button';
import CartItem from './CartItem';
import { CartToggleContext } from '../../contexts/CartOpenContext';
import { Link, useNavigate } from 'react-router-dom';

const CartDropdown = (props) => {
  const { cartItems, cartCount } = useContext(CartToggleContext);
  const navigate = useNavigate();

  const navigateHandler = (route) => {
    navigate(route);
  };

  return (
    <div className="cart">
      <div className="cart-items">
        {cartCount > 0 ? (
          cartItems.map(({ name, imageUrl, price, amount, id }) => {
            return (
              <CartItem name={name} imageUrl={imageUrl} price={price} amount={amount} key={id} />
            );
          })
        ) : (
          <p className="cart-empty-message">Your cart is empty</p>
        )}
      </div>
      <Button onClick={() => navigateHandler('/checkout')}>Go to Checkout</Button>
    </div>
  );
};
export default CartDropdown;
