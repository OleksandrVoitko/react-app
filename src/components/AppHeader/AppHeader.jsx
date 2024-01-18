import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import routes from '../../routes';
import UserMenu from '../UserMenu';
import {
  Header,
  Logo,
  NavigationLink,
  NavigationLogo,
} from './AppHeader.styled';

const AppHeader = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggetIn);

  return (
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
  );
};

export default AppHeader;
