import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: inline-flex;

  padding: 10px 12px;
  border-radius: 4px;

  border: 0px solid transparent;
  font: inherit;
  /* cursor: pointer; */
  cursor: ${props => (props.disabled ? '' : 'pointer')};

  background-color: ${props => (props.selected ? 'orangered' : '#e2e5e8')};
  color: ${props => (props.disabled ? 'white' : ' black')};
  opacity: 1;

  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: ${props => (props.disabled ? 1 : 0.8)};

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

    color: ${props => (props.disabled ? '' : 'white')};
    background-color: ${props => (props.disabled ? '' : 'orangered')};
    /* color: white;
    background-color: orangered; */
  }
`;
