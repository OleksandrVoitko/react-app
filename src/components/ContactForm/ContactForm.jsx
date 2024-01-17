import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelector from '../../redux/contacts/contactsSelector';
import Button from '../Button';

import { Forma, Input, Label, Span, WraperDiv } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector.getContacts);

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

    // Search for duplicates by name and number
    const nameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    const numberInContacts = contacts.find(
      contact => contact.number === number,
    );

    // Sending a new contact after verification
    if (!nameInContacts && !numberInContacts) {
      try {
        await dispatch(contactsOperations.createContact(newContact));

        toast.success(` ${name} - added.`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setName('');
        setNumber('');
      } catch (error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      toast.error(`${name} is already in contacts.`);
    }
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <Label htmlFor="name">
        <Span>Name:</Span>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          minLength="2"
          placeholder="Enter name..."
          required
        />
      </Label>

      <Label htmlFor="number">
        <Span>Number:</Span>
        <Input
          type="tel"
          id="number"
          value={number}
          onChange={handleChange}
          minLength="2"
          placeholder="Enter number..."
          required
        />
      </Label>
      <WraperDiv>
        <Button type="submit" disabled={!visible}>
          Add
        </Button>
      </WraperDiv>

      <ToastContainer autoClose={2500} />
    </Forma>
  );
};

export default ContactForm;
