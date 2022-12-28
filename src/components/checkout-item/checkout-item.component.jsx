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
} from '../../store/cart/cart.actions';
import { selectCart } from '../../store/cart/cart.selectors';

const CheckoutItem = ({ data }) => {
  const { imageUrl, name, quantity, price, id } = data;

  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItemToCart(data, cart));
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(data, cart));
  };

  const removeGroupOfItemsHandler = () => {
    dispatch(removeGroupOfItems(id, cart));
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
