import { createSelector } from 'reselect';

export const selectCategorySlice = (store) => store.categories;

export const selectCategories = createSelector(
  [selectCategorySlice],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategorySlice],
  (categoriesSlice) => categoriesSlice.isLoading
);
