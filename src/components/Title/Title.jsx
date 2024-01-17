import { TitleH1, Wraper } from './Tirle.styled';

const Title = ({ children }) => {
  return (
    <Wraper>
      <TitleH1>{children}</TitleH1>
    </Wraper>
  );
};

export default Title;
