import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const cartItemFound = cartItems.find((item) => item.id === productToAdd.id);

  if (cartItemFound) {
    return cartItems.map((item) =>
      item.id === productToAdd.id ? { ...item, amount: item.amount + 1 } : item
    );
  }

  return [...cartItems, { ...productToAdd, amount: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const cartItemFound = cartItems.find((item) => item.id === itemToRemove.id);

  if (cartItemFound.amount === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === itemToRemove.id ? { ...item, amount: item.amount - 1 } : item
  );
};

const clearItem = (cartItems, itemToRemove) =>
  cartItems.filter((item) => item.id !== itemToRemove.id);

export const CartToggleContext = createContext({
  toggler: false,
  setToggler: () => {},
  cartItems: [],
  addToCart: () => {},
  removeItemFromCart: () => {},
  removeItem: () => {},
  cartCount: 0,
});

export const CartToggleProvider = ({ children }) => {
  const [toggler, setToggler] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.amount, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newtotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.amount * cartItem.price,
      0
    );

    setTotal(newtotal);
  }, [cartItems]);

  const addToCart = (prod) => {
    setCartItems(addCartItem(cartItems, prod));
  };

  const removeItemFromCart = (item) => {
    setCartItems(removeCartItem(cartItems, item));
  };

  const removeItem = (item) => {
    setCartItems(clearItem(cartItems, item));
  };

  const value = {
    toggler,
    setToggler,
    cartItems,
    total,
    addToCart,
    cartCount,
    removeItemFromCart,
    removeItem,
  };

  return <CartToggleContext.Provider value={value}>{children}</CartToggleContext.Provider>;
};
