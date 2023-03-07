import { CartItem, ProductToAdd } from './cart.slice';

export const addItem = (item: ProductToAdd, cart: CartItem[]): CartItem[] => {
  //try to find the item
  const existingItem = cart.find((el) => el.id === item.id);

  //add quantity if the item exists
  if (existingItem) {
    return cart.map((el) => {
      return el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el;
    });
  }

  //add new item with quantity = 1 if item doesn't exist
  else {
    return [...cart, { ...item, quantity: 1 }];
  }
};

export const removeItem = (item: CartItem, cart: CartItem[]): CartItem[] => {
  //find item that we need to remove
  const existingItem = cart.find((el) => el.id === item.id);

  //delete if quantity = 1
  if (existingItem && existingItem.quantity === 1) {
    return cart.filter((el) => el.id !== item.id);
  }

  //reduce quantity if it is more than 1
  if (existingItem && existingItem.quantity > 1) {
    return cart.map((el) => {
      return el.id === item.id ? { ...el, quantity: el.quantity - 1 } : el;
    });
  }

  return cart;
};

export const removeItems = (id: number, cart: CartItem[]): CartItem[] => {
  return cart.filter((item) => item.id !== id);
};

// export const setCartItems = withMatcher(
//   (newCartItems: CartItem[]): SetCartItems =>
//     createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
// );

// export const addItemToCart = (
//   productToAdd: ProductToAdd,
//   cart: CartItem[]
// ): SetCartItems => {
//   const newCartItems = addItem(productToAdd, cart);

//   return setCartItems(newCartItems);
// };

// export const removeItemFromCart = (
//   productToRemove: CartItem,
//   cart: CartItem[]
// ): SetCartItems => {
//   const newCartItems = removeItem(productToRemove, cart);

//   return setCartItems(newCartItems);
// };

// export const removeGroupOfItems = (
//   id: number,
//   cart: CartItem[]
// ): SetCartItems => {
//   const newCartItems = removeItems(id, cart);

//   return setCartItems(newCartItems);
// };

// export const toggleCartDropdown = withMatcher(
//   (isCartDropdownShown: boolean): ToggleCartDropdown => {
//     return createAction(
//       CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN_SHOWN,
//       isCartDropdownShown
//     );
//   }
// );
