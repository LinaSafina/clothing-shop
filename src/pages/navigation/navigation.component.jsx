import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { NAV_CATEGORIES } from '../auth/FORM_DATA';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../context/cart.context';

const Navigation = () => {
  const { SHOP, CONTACTS, AUTH, LOGOUT } = NAV_CATEGORIES;

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartDropdownShown } = useContext(CartContext);

  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <nav className='nav'>
        <Link className='logo' to='/'>
          <CrownLogo className='logo__svg' />
        </Link>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <Link className='nav__link' to={SHOP.url}>
              {SHOP.title}
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link className='nav__link' to={CONTACTS.url}>
              {CONTACTS.title}
            </Link>
          </li>
          <li className='nav__list-item'>
            {currentUser && (
              <span className='nav__link' onClick={handleSignOut}>
                {LOGOUT.title}
              </span>
            )}
            {!currentUser && (
              <Link className='nav__link' to={AUTH.url}>
                {AUTH.title}
              </Link>
            )}
          </li>
          <li>
            <CartIcon />
          </li>
        </ul>
        {isCartDropdownShown && <CartDropdown />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
