import getImageByKey from '../../helpers/getImageByKey';
import './category-item.styles.scss';

const CategoryItem = ({ item: { title, img } }) => {
  return (
    <li className='category'>
      <div
        className='category__img'
        style={{ backgroundImage: `url(${getImageByKey(img)})` }}
      />
      <div className='category__inner'>
        <h2 className='category__name'>{title}</h2>
        <p className='category__text'>Купить</p>
      </div>
    </li>
  );
};

export default CategoryItem;
