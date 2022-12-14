import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import { CartContext } from '../../context/cart.context';

const Checkout = () => {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div className='checkout'>
      <div className='checkout__header'>
        <div className='checkout__header-cell'>
          <span>Продукт</span>
        </div>
        <div className='checkout__header-cell'>
          <span>Описание</span>
        </div>
        <div className='checkout__header-cell'>
          <span>Количество</span>
        </div>
        <div className='checkout__header-cell'>
          <span>Цена</span>
        </div>
        <div className='checkout__header-cell'>
          <span>Удалить</span>
        </div>
      </div>
      {cart.map((item) => (
        <CheckoutItem key={item.id} data={item} />
      ))}
      <div className='checkout__total'>Total: ${totalPrice}</div>
    </div>
  );
};

export default Checkout;
