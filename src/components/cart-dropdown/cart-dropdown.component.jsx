import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <ul className='cart-dropdown__list'>
        <li className='cart-dropdown__list-item'>
          <img className='cart-dropdown__img' src='' alt='' />
        </li>
      </ul>
      <Button>Оформить заказ</Button>
    </div>
  );
};

export default CartDropdown;
