import styled from 'styled-components';

export const Wraper = styled.div`
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
