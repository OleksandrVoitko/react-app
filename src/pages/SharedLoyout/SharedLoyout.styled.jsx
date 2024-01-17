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
  flex-direction: column;

  margin: 10px;
  border-bottom: 1px solid #4c527d;

  @media screen and (min-width: 767px) {
    flex-direction: row;

    padding: 0;
  }

  > nav {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  > div {
    margin-bottom: 10px;
  }
`;

export const NavigationLogo = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #4c527d;
  font-weight: 500;
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
  color: #4c527d;
  font-weight: 500;

  &.active,
  &:hover,
  &:focus {
    color: orangered;
  }
`;
