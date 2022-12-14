import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cart, setIsCartDropdownShown } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');

    setIsCartDropdownShown(false);
  };

  return (
    <div className='cart-dropdown'>
      <ul className='cart-dropdown__list'>
        {cart.map((item) => (
          <li key={item.id} className='cart-dropdown__list-item'>
            <CartItem data={item} />
          </li>
        ))}
      </ul>
      <Button onClick={goToCheckoutHandler}>Оформить</Button>
    </div>
  );
};

export default CartDropdown;
