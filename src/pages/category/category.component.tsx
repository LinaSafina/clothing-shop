import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/categories.selectors';
import { CategoryList, CategoryTitle } from './category.styles';

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(
    category ? categoriesMap[category] : []
  );

  useEffect(() => {
    setProducts(category ? categoriesMap[category] : []);
  }, [categoriesMap, category]);

  return (
    <div>
      <CategoryTitle>{category}</CategoryTitle>
      {isLoading && <Spinner />}
      {!isLoading && (
        <CategoryList>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryList>
      )}
    </div>
  );
};

export default Category;
