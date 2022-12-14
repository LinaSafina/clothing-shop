import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const INITIAL_VALUE = {
  cart: [],
  cartItemsCount: 0,
  totalPrice: 0,
  addItemToCart: () => {},
  removeGroupOfItems: () => {},
  removeItemFromCart: () => {},
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
  const [totalPrice, setTotalPrice] = useState(INITIAL_VALUE.totalPrice);

  useEffect(() => {
    const count = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

    setCartItemsCount(count);
  }, [cart]);

  useEffect(() => {
    const price = cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );

    setTotalPrice(price);
  }, [cart]);

  const addItemToCart = (item) => {
    //try to find the item
    const existingItem = cart.find((el) => el.id === item.id);

    //add quantity if the item exists
    if (existingItem) {
      setCart(
        cart.map((el) => {
          return el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el;
        })
      );
    }

    //add new item with quantity = 1 if item doesn't exist
    if (!existingItem) {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    //find item that we need to remove
    const existingItem = cart.find((el) => el.id === item.id);

    //delete if quantity = 1
    if (existingItem.quantity === 1) {
      setCart(cart.filter((el) => el.id !== item.id));
    }

    //reduce quantity if it is more than 1
    if (existingItem.quantity > 1) {
      setCart(
        cart.map((el) => {
          return el.id === item.id ? { ...el, quantity: el.quantity - 1 } : el;
        })
      );
    }
  };

  const removeGroupOfItems = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const value = {
    isCartDropdownShown,
    setIsCartDropdownShown,
    cart,
    setCart,
    addItemToCart,
    cartItemsCount,
    totalPrice,
    removeGroupOfItems,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
