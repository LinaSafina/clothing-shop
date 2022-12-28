import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

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

export const addItemToCart = (productToAdd, cart) => {
  const newCartItems = addItem(productToAdd, cart);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (productToRemove, cart) => {
  const newCartItems = removeItem(productToRemove, cart);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeGroupOfItems = (id, cart) => {
  const newCartItems = removeItems(id, cart);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const toggleCartDropdown = (isCartDropdownShown) => {
  return createAction(
    CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN_SHOWN,
    isCartDropdownShown
  );
};
