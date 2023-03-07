import { createSelector } from 'reselect';
import { RootState } from '../store';

import { CartState } from './cart.slice';

export const selectCartSlice = (store: RootState): CartState => store.cart;

export const selectCart = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.cart
);

export const selectCartItemsCount = createSelector([selectCart], (cart) =>
  cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0)
);

export const selectTotalPrice = createSelector([selectCart], (cart) =>
  cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
);

export const selectCartDropdown = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.isCartDropdownShown
);
