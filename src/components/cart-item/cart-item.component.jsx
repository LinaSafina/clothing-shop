import {
  StyledCartItem,
  CartItemDetails,
  CartItemImage,
  CartItemName,
} from './cart-item.styles.jsx';

const CartItem = ({ data }) => {
  const { name, quantity, price, imageUrl } = data;

  return (
    <StyledCartItem>
      <CartItemImage src={imageUrl} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span>
          {quantity} &#9747; {price}
        </span>
      </CartItemDetails>
    </StyledCartItem>
  );
};

export default CartItem;
