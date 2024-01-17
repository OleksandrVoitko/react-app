import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    align-items: center;
  }
`;

export const NavigationLogo = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  /* font-size: 22px; */
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  &:hover,
  &:focus {
    opacity: 0.8;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  > span {
    color: orangered;
    &:hover,
    &:focus {
      opacity: 0.8;

      transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

export const NavigationLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active,
  &:hover,
  &:focus {
    color: orangered;
    /* background-color: orangered; */
  }
`;
