import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import { BUTTON_VARIANT_CLASSES } from '../button/BUTTON_VARIANT_CLASSES';

import {
  ProductItem,
  ProductName,
  ProductPrice,
  ProductText,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCartHandler = () => {
    addItemToCart(product);
  };

  return (
    <ProductItem>
      <img src={imageUrl} alt={name} />
      <ProductText>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductText>
      <Button
        btnVarient={BUTTON_VARIANT_CLASSES.inverted}
        type='button'
        onClick={addProductToCartHandler}
      >
        В корзину
      </Button>
    </ProductItem>
  );
};

export default ProductCard;
