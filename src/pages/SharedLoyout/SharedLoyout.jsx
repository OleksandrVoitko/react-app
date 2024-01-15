// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { TailSpin } from 'react-loader-spinner';
import {
  Container,
  Header,
  Logo,
  NavigationLink,
  NavigationLogo,
} from './SharedLoyout.styled';
import UserMenu from '../../components/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import routes from '../../routes';
// import { NavLink } from 'react-router-dom';

const SharedLoyout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggetIn);

  return (
    <Container>
      <Header>
        <nav>
          <NavigationLogo to={routes.home}>
            <Logo>
              <span>Phone</span>book
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
      {/* <Suspense
        fallback={<TailSpin color="orangered" height={53} width={53} />}
      >
        <Outlet />
      </Suspense> */}
    </Container>
  );
};

export default SharedLoyout;
