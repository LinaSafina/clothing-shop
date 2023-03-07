import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { NAV_CATEGORIES } from '../auth/FORM_DATA';
import { signOutUserStart } from '../../store/user/user.slice';

import { Logo, Nav, NavLink, NavList } from './navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { selectCartDropdown } from '../../store/cart/cart.selectors';

const Navigation = () => {
  const { SHOP, CONTACTS, AUTH, LOGOUT } = NAV_CATEGORIES;

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const isCartDropdownShown = useSelector(selectCartDropdown);

  const handleSignOut = async () => {
    dispatch(signOutUserStart());
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
