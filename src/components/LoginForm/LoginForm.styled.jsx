import styled from 'styled-components';

export const Forma = styled.form`
  width: 320px;
  margin: 0px auto 15px;
  padding: 15px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;

  color: #4c527d;
`;

export const Span = styled.span`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 11px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  line-height: normal;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: transparent;
    border: 1px solid orangered;
  }
`;

export const WraperDiv = styled.div`
  text-align: center;
`;
