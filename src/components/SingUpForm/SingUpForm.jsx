import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import authOperations from "../../redux/auth/authOperations";
import register from "../../redux/auth/authOperations";
import { singUp } from "../../servises/auth-services";
// import { TailSpin } from "react-loader-spinner";
// import { useCreateContactMutation } from "../../../redux/phoneBook/contacts";

import { Button, Forma, Input, Label } from "./SingUpForm.styled";

const SingUpForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  // const [createContact, { isLoading }] = useCreateContactMutation();

  useEffect(() => {
    if (login && email && password) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [login, email, password]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "login":
        return setLogin(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const elements = e.currentTarget.elements;
    // console.log(elements);

    const newUser = {
      name: login,
      email,
      password,
    };

    dispatch(authOperations.register(newUser));

    // singUp(newUser)
    //   .then(() => {
    //     console.log(`singUp - OK`);
    //   })
    //   .catch((error) => {
    //     console.log(`singUp - Error`, error.message);
    //   });

    setLogin("");
    setEmail("");
    setPassword("");

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
      <Label htmlFor="login">
        Name
        <Input
          type="text"
          id="login"
          name="login"
          value={login}
          onChange={handleChange}
          minLength="2"
          placeholder="Enter your name..."
          required
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Login may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
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
      </div>
      {/* <ToastContainer /> */}
    </Forma>
  );
};

export default SingUpForm;
