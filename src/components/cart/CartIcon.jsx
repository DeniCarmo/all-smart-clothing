import { useContext } from 'react';
import iconCart from '../../assets/img/shopping-bag.svg';
import { CartToggleContext } from '../../contexts/CartOpenContext';
import { CartIconContainer, CartIconCount, CartIconImg } from '../../styles/cartIcon';

const CartIcon = (props) => {
  const { toggler, setToggler } = useContext(CartToggleContext);
  const { cartCount } = useContext(CartToggleContext);

  const toggleCart = () => {
    setToggler(!toggler);
  };

  return (
    <CartIconContainer onClick={toggleCart}>
      <CartIconImg src={iconCart} alt="Icon Cart" />
      <CartIconCount>{cartCount}</CartIconCount>
    </CartIconContainer>
  );
};
export default CartIcon;
