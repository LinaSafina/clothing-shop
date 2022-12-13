import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='cart-dropdown'>
      <ul className='cart-dropdown__list'>
        {cart.map((item) => (
          <li key={item.id} className='cart-dropdown__list-item'>
            <CartItem data={item} />
          </li>
        ))}
      </ul>
      <Button>Оформить заказ</Button>
    </div>
  );
};

export default CartDropdown;
