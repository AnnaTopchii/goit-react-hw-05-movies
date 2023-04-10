import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  font-size: 30px;
  align-items: center;
  height: 40px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #000;
  background-color: #ffcc99;
  border-bottom: 1px #000 solid;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  &.active {
    color: #803e00;
  }
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`;
