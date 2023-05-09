function CartItem({ name, price, imageUrl, amount }) {
  return (
    <div className="cartItem">
      <div className="cartItem-img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="cartItem-details">
        <h3 className="cartItem-title">{name}</h3>
        <p className="cartItem-amount">Quantity: {amount}</p>
        <p className="cartItem-price">${(amount * price).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItem;
