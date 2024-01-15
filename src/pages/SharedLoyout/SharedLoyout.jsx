import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { Container, Header, Logo, NavigationLink } from './SharedLoyout.styled';
import UserMenu from '../../components/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import routes from '../../routes';

const SharedLoyout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggetIn);

  return (
    <Container>
      <Header>
        <Logo>
          <span>Phone</span>book
        </Logo>
        <nav>
          <NavigationLink to={routes.home} end>
            Home
          </NavigationLink>
          <NavigationLink to={routes.contacts} end>
            Contacts
          </NavigationLink>
          <NavigationLink to="/todo-list" end>
            Todo List
          </NavigationLink>
        </nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <nav>
            <NavigationLink to={routes.singUp} end>
              SingUp
            </NavigationLink>
            <NavigationLink to={routes.login} end>
              Login
            </NavigationLink>
          </nav>
        )}
      </Header>
      <Suspense
        fallback={<TailSpin color="orangered" height={53} width={53} />}
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLoyout;
