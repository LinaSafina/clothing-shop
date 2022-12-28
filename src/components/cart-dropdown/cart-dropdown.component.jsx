import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import {
  CartDropdownList,
  EmptyMessage,
  StyledCartDropdown,
} from './cart-dropdown.styles';
import { toggleCartDropdown } from '../../store/cart/cart.actions';
import { selectCart } from '../../store/cart/cart.selectors';

const CartDropdown = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');

    dispatch(toggleCartDropdown(false));
  };

  return (
    <StyledCartDropdown>
      <CartDropdownList>
        {cart.length === 0 && <EmptyMessage>Your card is empty</EmptyMessage>}
        {cart.length !== 0 &&
          cart.map((item) => (
            <li key={item.id}>
              <CartItem data={item} />
            </li>
          ))}
      </CartDropdownList>
      <Button onClick={goToCheckoutHandler}>Оформить</Button>
    </StyledCartDropdown>
  );
};

export default CartDropdown;
