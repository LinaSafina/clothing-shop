import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCartHandler = () => {
    addItemToCart(product);
  };

  return (
    <li className='product-item'>
      <img className='product__img' src={imageUrl} alt={name} />
      <div className='product__text'>
        <span className='product__name'>{name}</span>
        <span className='product__price'>{price}</span>
      </div>
      <Button
        btnVarient='inverted'
        type='button'
        className='product__btn'
        onClick={addProductToCartHandler}
      >
        В корзину
      </Button>
    </li>
  );
};

export default ProductCard;
