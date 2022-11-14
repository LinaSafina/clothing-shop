import CategoryItem from '../category-item/category-item.component';
import './categories-list.styles.scss';

const CategoriesList = ({ categories }) => {
  return (
    <ul className='categories__list'>
      {categories.map((category) => (
        <CategoryItem key={category.id} item={category} />
      ))}
    </ul>
  );
};

export default CategoriesList;
