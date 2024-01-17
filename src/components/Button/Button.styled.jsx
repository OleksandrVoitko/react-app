import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: 0px solid transparent;
  font: inherit;
  cursor: pointer;

  background-color: ${props => (props.selected ? 'orangered' : '#e2e5e8')};
  color: ${props => (props.selected ? 'white' : ' black')};
  opacity: 1;

  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 0.8;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

    color: white;
    background-color: orangered;
  }
`;
