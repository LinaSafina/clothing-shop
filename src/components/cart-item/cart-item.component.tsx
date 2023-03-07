import { FC } from 'react';
import {
  StyledCartItem,
  CartItemDetails,
  CartItemImage,
  CartItemName,
} from './cart-item.styles';

export type CartItemProps = {
  data: { name: string; quantity: number; price: number; imageUrl: string };
};

const CartItem: FC<CartItemProps> = ({ data }) => {
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
