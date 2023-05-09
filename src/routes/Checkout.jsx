import { useContext } from 'react';
import { CartToggleContext } from '../contexts/CartOpenContext';
import CheckoutItem from '../components/checkout/CheckoutItem';

const Checkout = () => {
  const { cartItems, total } = useContext(CartToggleContext);

  return (
    <section className="checkout">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        const { id } = item;
        return <CheckoutItem item={item} key={id} />;
      })}
      <span className="checkout-total">Total: ${total.toFixed(2)}</span>
    </section>
  );
};
export default Checkout;
