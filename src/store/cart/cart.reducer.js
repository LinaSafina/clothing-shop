import { CART_ACTION_TYPES } from './cart.types';

const INITIAL_STATE = {
  cart: [],
  isCartDropdownShown: false,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS: {
      return { ...state, cart: payload };
    }

    case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN_SHOWN: {
      return {
        ...state,
        isCartDropdownShown: payload,
      };
    }

    default: {
      return state;
    }
  }
};
