import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoriesState } from './categories.slice';
import { CategoryMap } from './categories.slice';

export const selectCategorySlice = (store: RootState): CategoriesState =>
  store.categories;

export const selectCategories = createSelector(
  [selectCategorySlice],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategorySlice],
  (categoriesSlice) => categoriesSlice.isLoading
);
