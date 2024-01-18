import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 300px;
    padding: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 750px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Header = styled.header`
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;

  padding: 20px;
  border-bottom: 1px solid #4c527d;

  @media screen and (min-width: 767px) {
    flex-direction: row;

    padding: 10px;
  }

  > nav {
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      margin-bottom: 20px;
    }
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
