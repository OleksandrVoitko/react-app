import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import { TailSpin } from "react-loader-spinner";
// import { useCreateContactMutation } from "../../../redux/phoneBook/contacts";

import { Button, Forma, Input, Label } from "./LoginForm.styled";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  // const [createContact, { isLoading }] = useCreateContactMutation();

  useEffect(() => {
    if (login && password) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [login, password]);

  const handleChange = (e) => {
    if (e.target.id === "login") {
      setLogin(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`login: ${login} /=<>=/ password: ${password}`);
    setLogin("");
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
        Login
        <Input
          type="text"
          id="login"
          value={login}
          onChange={handleChange}
          minLength="2"
          placeholder="Enter login..."
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

export default LoginForm;
