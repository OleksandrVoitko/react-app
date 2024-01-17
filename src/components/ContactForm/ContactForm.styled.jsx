import styled from 'styled-components';

export const Forma = styled.form`
  width: 320px;
  margin: 0 auto 15px;
  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 95%;

    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const Label = styled.label`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 15px;

  color: #4c527d;
`;

export const Span = styled.span`
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 90%;
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
  margin-top: 15px;
`;
