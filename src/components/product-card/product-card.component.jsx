import { useDispatch, useSelector } from 'react-redux';

import Button from '../button/button.component';

import { BUTTON_VARIANT_CLASSES } from '../button/BUTTON_VARIANT_CLASSES';
import { addItemToCart } from '../../store/cart/cart.actions';
import {
  ProductItem,
  ProductName,
  ProductPrice,
  ProductText,
} from './product-card.styles';
import { selectCart } from '../../store/cart/cart.selectors';

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const addProductToCartHandler = () => {
    dispatch(addItemToCart(product, cart));
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
