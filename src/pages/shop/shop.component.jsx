import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { setCategories } from '../../store/categories/categories.actions';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryArray = await getCategoriesAndDocuments();

      dispatch(setCategories(categoryArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <div className='shop'>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </div>
  );
};

export default Shop;
