import CategoriesList from './components/categories-list/categories-list.component';

const App = () => {
  const categories = [
    { id: '1', title: 'Шляпы', img: 'hats' },
    { id: '2', title: 'Куртки', img: 'jackets' },
    { id: '3', title: 'Кроссовки', img: 'trainers' },
    { id: '4', title: 'Женщины', img: 'women' },
    { id: '5', title: 'Мужчины', img: 'men' },
  ];

  return <CategoriesList categories={categories} />;
};

export default App;
