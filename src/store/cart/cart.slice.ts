import { createSlice } from '@reduxjs/toolkit/dist';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { CategoryItem } from '../categories/categories.slice';
import { addItem, removeItem, removeItems } from './cart.helpers';

export type CartState = {
  readonly cart: CartItem[];
  readonly isCartDropdownShown: boolean;
};

const INITIAL_STATE: CartState = {
  cart: [],
  isCartDropdownShown: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart(state, action: PayloadAction<ProductToAdd>) {
      state.cart = addItem(action.payload, state.cart);
    },
    removeItemFromCart(state, action: PayloadAction<CartItem>) {
      state.cart = removeItem(action.payload, state.cart);
    },
    removeGroupOfItems(state, action: PayloadAction<number>) {
      state.cart = removeItems(action.payload, state.cart);
    },
    toggleCartDropdown(state, action: PayloadAction<boolean>) {
      state.isCartDropdownShown = action.payload;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addItemToCart,
  removeItemFromCart,
  removeGroupOfItems,
  toggleCartDropdown,
} = cartSlice.actions;

export type ProductToAdd = CategoryItem;

export type CartItem = CategoryItem & {
  quantity: number;
};
