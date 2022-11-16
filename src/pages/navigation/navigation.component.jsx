import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => {
  const navCategories = [
    { title: 'Магазин', url: 'shop' },
    { title: 'Контакты', url: 'contacts' },
    { title: 'Вход', url: 'auth' },
  ];

  return (
    <>
      <nav className='nav'>
        <Link className='logo' to='/'>
          <CrownLogo className='logo__svg' />
        </Link>
        <ul className='nav__list'>
          {navCategories.map(({ title, url }, index) => (
            <li className='nav__list-item' key={index}>
              <Link className='nav__link' to={url}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
