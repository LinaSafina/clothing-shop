import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  StyledCheckout,
  CheckoutHeader,
  CheckoutHeaderCell,
  CheckoutTotal,
} from './checkout.styles';

import { selectCart, selectTotalPrice } from '../../store/cart/cart.selectors';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cart = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalPrice);

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
