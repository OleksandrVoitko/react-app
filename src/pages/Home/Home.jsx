import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import Loyout from '../../components/Loyout';
import Title from '../../components/Title';
import routes from '../../routes';
import { BleackSpan, Icon, IconWraper, Text, Wraper } from './Home.styled';

const Home = () => {
  return (
    <Loyout>
      <Wraper>
        <Title>
          Phone<BleackSpan>Book</BleackSpan>
        </Title>

        <IconWraper>
          <Icon />
        </IconWraper>

        <Text>Fast, Secure and Mobile Friendly React Application</Text>

        <NavLink to={routes.contacts}>
          <Button selected={true}>Try it now</Button>
        </NavLink>
      </Wraper>
    </Loyout>
  );
};

export default Home;
