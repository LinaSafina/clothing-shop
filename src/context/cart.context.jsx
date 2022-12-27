import { createContext, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

const INITIAL_VALUE = {
  cart: [],
  cartItemsCount: 0,
  totalPrice: 0,
  isCartDropdownShown: false,
  dispatch: () => null,
};

const addItem = (item, cart) => {
  //try to find the item
  const existingItem = cart.find((el) => el.id === item.id);

  //add quantity if the item exists
  if (existingItem) {
    return cart.map((el) => {
      return el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el;
    });
  }

  //add new item with quantity = 1 if item doesn't exist
  if (!existingItem) {
    return [...cart, { ...item, quantity: 1 }];
  }
};

const removeItem = (item, cart) => {
  //find item that we need to remove
  const existingItem = cart.find((el) => el.id === item.id);

  //delete if quantity = 1
  if (existingItem.quantity === 1) {
    return cart.filter((el) => el.id !== item.id);
  }

  //reduce quantity if it is more than 1
  if (existingItem.quantity > 1) {
    return cart.map((el) => {
      return el.id === item.id ? { ...el, quantity: el.quantity - 1 } : el;
    });
  }
};

const removeItems = (id, cart) => {
  return cart.filter((item) => item.id !== id);
};

export const CartContext = createContext(INITIAL_VALUE);

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'UPDATE_CART_ITEMS',
  TOGGLE_CART_DROPDOWN_SHOWN: 'TOGGLE_CART_DROPDOWN_SHOWN',
};

const INITIAL_STATE = {
  cart: [],
  cartItemsCount: 0,
  totalPrice: 0,
  isCartDropdownShown: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS: {
      return { ...state, ...payload };
    }

    case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN_SHOWN: {
      return {
        ...state,
        ...payload,
      };
    }

    default: {
      throw new Error('Unrecognized action type');
    }
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { isCartDropdownShown, cart, cartItemsCount, totalPrice } = state;

  const addItemToCart = (productToAdd) => {
    const newCartItems = addItem(productToAdd, cart);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeItem(productToRemove, cart);
    updateCartItemsReducer(newCartItems);
  };

  const removeGroupOfItems = (id) => {
    const newCartItems = removeItems(id, cart);
    updateCartItemsReducer(newCartItems);
  };

  const toggleCartDropdown = () => {
    dispatch(
      createAction(CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN_SHOWN, {
        isCartDropdownShown: !isCartDropdownShown,
      })
    );
  };

  const updateCartItemsReducer = (newCartItems) => {
    const count = newCartItems.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

    const price = newCartItems.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cart: newCartItems,
        cartItemsCount: count,
        totalPrice: price,
      })
    );
  };

  const value = {
    isCartDropdownShown,
    cart,
    cartItemsCount,
    totalPrice,
    removeItemFromCart,
    addItemToCart,
    removeGroupOfItems,
    toggleCartDropdown,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
