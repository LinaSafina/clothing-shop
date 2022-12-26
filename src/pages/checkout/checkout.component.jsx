import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  StyledCheckout,
  CheckoutHeader,
  CheckoutHeaderCell,
  CheckoutTotal,
} from './checkout.styles';
import { CartContext } from '../../context/cart.context';

const Checkout = () => {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <StyledCheckout>
      <CheckoutHeader>
        <CheckoutHeaderCell>
          <span>Продукт</span>
        </CheckoutHeaderCell>
        <CheckoutHeaderCell>
          <span>Описание</span>
        </CheckoutHeaderCell>
        <CheckoutHeaderCell>
          <span>Количество</span>
        </CheckoutHeaderCell>
        <CheckoutHeaderCell>
          <span>Цена</span>
        </CheckoutHeaderCell>
        <CheckoutHeaderCell>
          <span>Удалить</span>
        </CheckoutHeaderCell>
      </CheckoutHeader>
      {cart.map((item) => (
        <CheckoutItem key={item.id} data={item} />
      ))}
      <CheckoutTotal>Total: ${totalPrice}</CheckoutTotal>
    </StyledCheckout>
  );
};

export default Checkout;
