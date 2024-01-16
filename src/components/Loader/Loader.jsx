import { Rings } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <Rings color="orangered" height={100} width={100} />
    </Wrapper>
  );
};
