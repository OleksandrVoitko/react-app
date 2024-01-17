import styled from 'styled-components';

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
