import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import getImageByKey from '../../utils/helpers/getImageByKey.utils';
import {
  DirectoryItemImage,
  DirectoryItemInner,
  StyledDirectoryItem,
} from './directory-item.styles';

type DirectoryItemProps = {
  item: {
    title: string;
    img: string;
    route: string;
  };
};

const DirectoryItem: FC<DirectoryItemProps> = ({
  item: { title, img, route },
}) => {
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
