import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { NAV_CATEGORIES } from '../auth/FORM_DATA';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../context/cart.context';
import { Logo, Nav, NavLink, NavList } from './navigation.styles';

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
      <Nav>
        <Logo to='/'>
          <CrownLogo />
        </Logo>
        <NavList>
          <li>
            <NavLink to={SHOP.url}>{SHOP.title}</NavLink>
          </li>
          <li>
            <NavLink to={CONTACTS.url}>{CONTACTS.title}</NavLink>
          </li>
          <li>
            {currentUser && (
              <NavLink as='span' onClick={handleSignOut}>
                {LOGOUT.title}
              </NavLink>
            )}
            {!currentUser && <NavLink to={AUTH.url}>{AUTH.title}</NavLink>}
          </li>
          <li>
            <CartIcon />
          </li>
        </NavList>
        {isCartDropdownShown && <CartDropdown />}
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
