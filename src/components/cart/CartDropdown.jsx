import { useContext } from 'react';
import Button from '../Button';
import CartItem from './CartItem';
import { CartToggleContext } from '../../contexts/CartOpenContext';
import { useNavigate } from 'react-router-dom';
import { CartDropDown, CartDropDownItems, EmptyCartMessage } from '../../styles/cartDropDown';

const CartDropdown = (props) => {
  const { cartItems, cartCount } = useContext(CartToggleContext);
  const navigate = useNavigate();

  const navigateHandler = (route) => {
    navigate(route);
  };

  return (
    <CartDropDown>
      <CartDropDownItems>
        {cartCount > 0 ? (
          cartItems.map(({ name, imageUrl, price, amount, id }) => {
            return (
              <CartItem name={name} imageUrl={imageUrl} price={price} amount={amount} key={id} />
            );
          })
        ) : (
          <EmptyCartMessage className="cart-empty-message">Your cart is empty</EmptyCartMessage>
        )}
      </CartDropDownItems>
      <Button onClick={() => navigateHandler('/checkout')}>Go to Checkout</Button>
    </CartDropDown>
  );
};
export default CartDropdown;
