import './cart-item.styles.scss';

const CartItem = ({ data }) => {
  const { name, quantity, price, imageUrl } = data;

  return (
    <div className='cart-item'>
      <img className='cart-item__img' src={imageUrl} alt={name} />
      <div className='cart-item__details'>
        <h4 className='cart-item__name'>{name}</h4>
        <span className='cart-item__price'>
          {quantity} &#9747; {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
