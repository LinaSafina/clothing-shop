import DirectoryItem from '../directory-item/directory-item.component';
import { StyledCategoriesList } from './categories-list.styles';
import { CATEGORIES_LIST } from './CATEGORIES_LIST';

const CategoriesList = () => {
  return (
    <StyledCategoriesList>
      {CATEGORIES_LIST.map((category) => (
        <DirectoryItem key={category.id} item={category} />
      ))}
    </StyledCategoriesList>
  );
};

export default CategoriesList;
