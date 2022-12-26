import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import {
  CartIconCount,
  ShoppingIcon,
  StyledCartIcon,
} from './cart-icon.styles';

const CartIcon = () => {
  const { cartItemsCount, setIsCartDropdownShown } = useContext(CartContext);

  const handleCartIconClick = () => {
    setIsCartDropdownShown((prevState) => !prevState);
  };

  return (
    <StyledCartIcon onClick={handleCartIconClick}>
      <ShoppingIcon className='cart-icon__icon' />
      <CartIconCount>{cartItemsCount}</CartIconCount>
    </StyledCartIcon>
  );
};

export default CartIcon;
