import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import { TailSpin } from 'react-loader-spinner';
// import { useCreateContactMutation } from '../../redux/contacts/contacts';

import { Button, Forma, Input, Label } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import contactsSelector from '../../redux/contacts/contactsSelector';
import contactsOperations from '../../redux/contacts/contactsOperations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  // const isLoading = useSelector(contactsSelector.getIsLoading);
  // const [createContact, { isLoading }] = useCreateContactMutation();

  useEffect(() => {
    if (name && number) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [name, number]);

  const handleChange = e => {
    if (e.target.id === 'name') {
      setName(e.target.value);
    } else {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    try {
      await dispatch(contactsOperations.createContact(newContact));
      // createContact(newContact);
      toast.success(`Contact: ${name} - added!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setName('');
      setNumber('');
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          minLength="2"
          placeholder="Enter name..."
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>

      <Label htmlFor="number">
        Number
        <Input
          type="tel"
          id="number"
          value={number}
          onChange={handleChange}
          minLength="2"
          placeholder="Enter number..."
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>

      <Button type="submit" disabled={!visible}>
        Add
      </Button>

      <ToastContainer autoClose={2500} />
    </Forma>
  );
};

export default ContactForm;
