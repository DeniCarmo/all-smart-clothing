import { useContext } from 'react';
import iconCart from '../../assets/img/shopping-bag.svg';
import { CartToggleContext } from '../../contexts/CartOpenContext';

const CartIcon = (props) => {
  const { toggler, setToggler } = useContext(CartToggleContext);
  const { cartCount } = useContext(CartToggleContext);

  const toggleCart = () => {
    setToggler(!toggler);
  };

  return (
    <div className="cartIcon" onClick={toggleCart}>
      <img src={iconCart} alt="Icon Cart" className="cartIcon-icon" />
      <span className="cartIcon-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
