import { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { ProductContext } from '../../context/product.context';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className='shop'>
      <section className='shop__section'>
        <h2 className='shop__title'>Sneakers</h2>
        <ul className='shop__list'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Shop;
