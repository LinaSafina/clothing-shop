import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewList,
  CategoryPreviewTitle,
  StyledCategoryPreview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <StyledCategoryPreview>
      <h2>
        <CategoryPreviewTitle to={`${title.toLowerCase()}`}>
          {title}
        </CategoryPreviewTitle>
      </h2>
      <CategoryPreviewList>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewList>
    </StyledCategoryPreview>
  );
};

export default CategoryPreview;
