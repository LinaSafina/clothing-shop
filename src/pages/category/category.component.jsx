import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/categories.selectors';
import { CategoryList, CategoryTitle } from './category.styles';

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);

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
