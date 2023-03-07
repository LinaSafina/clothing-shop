import { useDispatch, useSelector } from 'react-redux';

import {
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  CheckoutItemRemove,
  StyledCheckoutItem,
} from './checkout-item.styles';
import {
  addItemToCart,
  removeGroupOfItems,
  removeItemFromCart,
} from '../../store/cart/cart.slice';
import { selectCart } from '../../store/cart/cart.selectors';
import { CartItemProps } from '../cart-item/cart-item.component';
import { FC } from 'react';

type CheckoutItemProps = CartItemProps & { data: { id: number } };

const CheckoutItem: FC<CheckoutItemProps> = ({ data }) => {
  const { imageUrl, name, quantity, price, id } = data;

  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItemToCart(data));
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(data));
  };

  const removeGroupOfItemsHandler = () => {
    dispatch(removeGroupOfItems(id));
  };

  return (
    <StyledCheckoutItem>
      <div className='checkout-item__img-container'>
        <img className='checkout-item__img' src={imageUrl} alt={name} />
      </div>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <span onClick={removeItemHandler}>&#10094;</span>
        <span>{quantity}</span>
        <span onClick={addItemHandler}>&#10095;</span>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <CheckoutItemRemove onClick={removeGroupOfItemsHandler}>
        &#10005;
      </CheckoutItemRemove>
    </StyledCheckoutItem>
  );
};

export default CheckoutItem;
