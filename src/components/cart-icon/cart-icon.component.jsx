import { useContext } from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { cartItemsCount, setIsCartDropdownShown } = useContext(CartContext);

  const handleCartIconClick = () => {
    setIsCartDropdownShown((prevState) => !prevState);
  };

  return (
    <div className='cart-icon' onClick={handleCartIconClick}>
      <ShoppingCartIcon className='cart-icon__icon' />
      <span className='cart-icon__count'>{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
