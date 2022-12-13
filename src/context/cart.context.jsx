import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const INITIAL_VALUE = {
  cart: [],
  cartItemsCount: 0,
  addItemToCart: () => {},
  isCartDropdownShown: false,
  setIsCartDropdownShown: () => {},
};

export const CartContext = createContext(INITIAL_VALUE);

export const CartProvider = ({ children }) => {
  const [isCartDropdownShown, setIsCartDropdownShown] = useState(
    INITIAL_VALUE.isCartDropdownShown
  );
  const [cart, setCart] = useState(INITIAL_VALUE.cart);
  const [cartItemsCount, setCartItemsCount] = useState(
    INITIAL_VALUE.cartItemsCount
  );

  useEffect(() => {
    const count = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

    setCartItemsCount(count);
  }, [cart]);

  const addItemToCart = (item) => {
    //try to find the item
    const existingItemIndex = cart.findIndex((el) => el.id === item.id);

    //add quantity if the item exists
    if (existingItemIndex !== -1) {
      setCart(
        cart.map((el) => {
          return el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el;
        })
      );
    }

    //add new item with quantity = 1 if item doesn't exist
    if (existingItemIndex === -1) {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const value = {
    isCartDropdownShown,
    setIsCartDropdownShown,
    cart,
    setCart,
    addItemToCart,
    cartItemsCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
