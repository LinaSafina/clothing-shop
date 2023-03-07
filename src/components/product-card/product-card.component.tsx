import { useDispatch, useSelector } from 'react-redux';

import Button from '../button/button.component';

import { BUTTON_VARIANT_CLASSES } from '../button/constants';
import { addItemToCart } from '../../store/cart/cart.slice';
import {
  ProductItem,
  ProductName,
  ProductPrice,
  ProductText,
} from './product-card.styles';
import { selectCart } from '../../store/cart/cart.selectors';
import { ProductToAdd } from '../../store/cart/cart.slice';
import { FC } from 'react';

type ProductCardProps = {
  product: ProductToAdd;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { imageUrl, name, price } = product;

  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const addProductToCartHandler = () => {
    dispatch(addItemToCart(product));
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
