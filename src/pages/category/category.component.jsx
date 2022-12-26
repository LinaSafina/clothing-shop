import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../context/categories.context';
import { CategoryList, CategoryTitle } from './category.styles';

const Category = () => {
  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <div>
      {products && <CategoryTitle>{category}</CategoryTitle>}
      {products && (
        <CategoryList>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CategoryList>
      )}
    </div>
  );
};

export default Category;
