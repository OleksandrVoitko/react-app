import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import authOperations from '../../redux/auth/authOperations';
import Button from '../Button';
// import { TailSpin } from "react-loader-spinner";
// import { useCreateContactMutation } from "../../../redux/phoneBook/contacts";

import { Forma, Input, Label } from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  // const [createContact, { isLoading }] = useCreateContactMutation();

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

    // const newContact = {
    //   name,
    //   number: phone,
    // };

    // try {
    //   await createContact(newContact);
    //   toast.success(`Contact: ${name} - added!`, {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    //   setName("");
    //   setPhone("");
    // } catch (error) {
    //   toast.error(error.message, {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <Label htmlFor="email">
        E-mail
        <Input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          minLength="2"
          placeholder="Enter e-mail..."
          required
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Login may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>

      <Label htmlFor="password">
        Password
        <Input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          minLength="8"
          placeholder="Enter password..."
          required
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>
      <div>
        {/* {isLoading ? (
          <TailSpin color="orangered" height={53} width={53} />
        ) : (
          <Button type="submit" disabled={!visible}>
            Add
          </Button>
        )} */}
        <Button type="submit" disabled={!visible}>
          Add
        </Button>
        {/* <Button type="submit" disabled={!visible}>
          Add
        </Button> */}
      </div>
      {/* <ToastContainer /> */}
    </Forma>
  );
};

export default LoginForm;
