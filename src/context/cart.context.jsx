import { useState } from 'react';
import { createContext } from 'react';

const INITIAL_VALUE = {
  cart: [],
  isCartDropdownShown: false,
  setIsCartDropdownShown: () => {},
};

export const CartContext = createContext(INITIAL_VALUE);

export const CartProvider = ({ children }) => {
  const [isCartDropdownShown, setIsCartDropdownShown] = useState(
    INITIAL_VALUE.isCartDropdownShown
  );
  const [cart, setCart] = useState(INITIAL_VALUE.cart);

  const value = {
    isCartDropdownShown,
    setIsCartDropdownShown,
    cart,
    setCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
