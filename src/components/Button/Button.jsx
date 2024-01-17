import { ButtonStyle } from './Button.styled';

const Button = ({
  handleClick,
  disabled = false,
  selected = false,
  type = 'button',
  padding = 9,
  children,
}) => {
  return (
    <ButtonStyle
      onClick={handleClick}
      disabled={disabled}
      selected={selected}
      type={type}
      style={{
        paddingTop: `${padding}px`,
        paddingBottom: `${padding}px`,
      }}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
