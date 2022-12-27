import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import {
  CartIconCount,
  ShoppingIcon,
  StyledCartIcon,
} from './cart-icon.styles';

const CartIcon = () => {
  const { cartItemsCount, toggleCartDropdown } = useContext(CartContext);

  const handleCartIconClick = () => {
    toggleCartDropdown();
  };

  return (
    <StyledCartIcon onClick={handleCartIconClick}>
      <ShoppingIcon className='cart-icon__icon' />
      <CartIconCount>{cartItemsCount}</CartIconCount>
    </StyledCartIcon>
  );
};

export default CartIcon;
