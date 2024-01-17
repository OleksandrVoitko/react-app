import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import authOperations from '../../redux/auth/authOperations';
import Button from '../Button';

import { Forma, Input, Label, Span, WraperDiv } from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (email && password) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [email, password]);

  const handleChange = e => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(authOperations.logIn(user));

    setEmail('');
    setPassword('');
  };

  return (
    <Forma onSubmit={handleSubmit}>
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
          Login
        </Button>
      </WraperDiv>
    </Forma>
  );
};

export default LoginForm;
