import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {
  CheckoutItemImageContainer,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  CheckoutItemRemove,
  StyledCheckoutItem,
} from './checkout-item.styles';

const CheckoutItem = ({ data }) => {
  const { imageUrl, name, quantity, price, id } = data;

  const { addItemToCart, removeItemFromCart, removeGroupOfItems } =
    useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart(data);
  };

  const removeItemHandler = () => {
    removeItemFromCart(data);
  };

  const removeGroupOfItemsHandler = () => {
    removeGroupOfItems(id);
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
