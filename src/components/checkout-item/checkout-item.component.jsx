import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

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
    <div className='checkout-item'>
      <div className='checkout-item__img-container'>
        <img className='checkout-item__img' src={imageUrl} alt={name} />
      </div>
      <span className='checkout-item__name'>{name}</span>
      <div className='checkout-item__quantity'>
        <span className='checkout-item__arrow' onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className='checkout-item__value'>{quantity}</span>
        <span className='checkout-item__arrow' onClick={addItemHandler}>
          &#10095;
        </span>
      </div>
      <span className='checkout-item__price'>{price}</span>
      <span
        className='checkout-item__remove'
        onClick={removeGroupOfItemsHandler}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
