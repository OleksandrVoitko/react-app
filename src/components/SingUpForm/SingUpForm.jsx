import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import authOperations from '../../redux/auth/authOperations';
import Button from '../Button';
import { Forma, Input, Label, Span, WraperDiv } from './SingUpForm.styled';

const SingUpForm = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (login && email && password) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [login, email, password]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'login':
        return setLogin(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: login,
      email,
      password,
    };

    dispatch(authOperations.register(newUser));

    setLogin('');
    setEmail('');
    setPassword('');
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <Label htmlFor="login">
        <Span>Name</Span>
        <Input
          type="text"
          id="login"
          name="login"
          value={login}
          onChange={handleChange}
          minLength="2"
          placeholder="Enter your name..."
          required
        />
      </Label>
      <Label htmlFor="email">
        <Span>E-mail</Span>
        <Input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          minLength="2"
          placeholder="Enter e-mail..."
          required
        />
      </Label>

      <Label htmlFor="password">
        <Span>Password</Span>
        <Input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          minLength="8"
          placeholder="Enter password..."
          required
        />
      </Label>
      <WraperDiv>
        <Button type="submit" disabled={!visible}>
          Sing up
        </Button>
      </WraperDiv>
    </Forma>
  );
};

export default SingUpForm;
