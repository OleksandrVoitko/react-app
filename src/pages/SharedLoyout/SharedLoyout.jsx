import { Outlet } from 'react-router-dom';
import AppFooter from '../../components/AppFooter/AppFooter';
import AppHeader from '../../components/AppHeader';
import Container from '../../components/Container/Container';

const SharedLoyout = () => {
  return (
    <Container>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </Container>
  );
};

export default SharedLoyout;
