import { TailSpin } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <TailSpin color="orangered" height={53} width={53} />
    </Wrapper>
  );
};
