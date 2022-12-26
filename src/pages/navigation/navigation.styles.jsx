import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Logo = styled(Link)`
  cursor: pointer;
  height: 100%;
  width: 80px;
  padding: 15px;
  svg {
    height: 100%;
  }
`;
