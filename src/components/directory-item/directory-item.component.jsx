import { useNavigate } from 'react-router-dom';
import getImageByKey from '../../utils/helpers/getImageByKey.utils';
import {
  DirectoryLink,
  DirectoryItemImage,
  DirectoryItemInner,
  StyledDirectoryItem,
} from './directory-item.styles';

const DirectoryItem = ({ item: { title, img, route } }) => {
  const navigate = useNavigate();

  const openCategoryPageHandler = () => navigate(`shop/${route}`);

  return (
    <StyledDirectoryItem onClick={openCategoryPageHandler}>
      <DirectoryItemImage
        imageUrl={getImageByKey(img)}
        style={{ backgroundImage: `url(${getImageByKey(img)})` }}
      />
      <DirectoryItemInner>
        <h2>{title}</h2>
        <p>Купить</p>
      </DirectoryItemInner>
    </StyledDirectoryItem>
  );
};

export default DirectoryItem;
