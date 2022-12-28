import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartDropdown,
  selectCartItemsCount,
} from '../../store/cart/cart.selectors';
import { toggleCartDropdown } from '../../store/cart/cart.actions';
import {
  CartIconCount,
  ShoppingIcon,
  StyledCartIcon,
} from './cart-icon.styles';

const CartIcon = () => {
  const cartItemsCount = useSelector(selectCartItemsCount);
  const isCartDropdownShown = useSelector(selectCartDropdown);
  const dispatch = useDispatch();

  const handleCartIconClick = () => {
    dispatch(toggleCartDropdown(!isCartDropdownShown));
  };

  return (
    <StyledCartIcon onClick={handleCartIconClick}>
      <ShoppingIcon className='cart-icon__icon' />
      <CartIconCount>{cartItemsCount}</CartIconCount>
    </StyledCartIcon>
  );
};

export default CartIcon;
