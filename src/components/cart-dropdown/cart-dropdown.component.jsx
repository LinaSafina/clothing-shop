import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../context/cart.context';
import {
  CartDropdownButton,
  CartDropdownList,
  EmptyMessage,
  StyledCartDropdown,
} from './cart-dropdown.styles';
import Button from '../button/button.component';

const CartDropdown = () => {
  const { cart, toggleCartDropdown } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');

    toggleCartDropdown(false);
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
