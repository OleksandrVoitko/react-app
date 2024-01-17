import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes';

import authSelectors from '../../redux/auth/authSelectors';
import UserMenu from '../../components/UserMenu';
import AppFooter from '../../components/AppFooter/AppFooter';

import {
  Container,
  Header,
  Logo,
  NavigationLink,
  NavigationLogo,
} from './SharedLoyout.styled';

const SharedLoyout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggetIn);

  return (
    <Container>
      <Header>
        <nav>
          <NavigationLogo to={routes.home}>
            <Logo>
              <span>Phone</span>Book
            </Logo>
          </NavigationLogo>
          {isLoggedIn && (
            <NavigationLink to={routes.contacts}>Contacts</NavigationLink>
          )}
        </nav>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div>
            <NavigationLink to={routes.singUp}>SingUp</NavigationLink>
            <NavigationLink to={routes.login}>Login</NavigationLink>
          </div>
        )}
      </Header>
      <Outlet />
      <AppFooter />
    </Container>
  );
};

export default SharedLoyout;
