import 'react-toastify/dist/ReactToastify.min.css';

import { useSelector } from 'react-redux';
import editingSelector from '../../redux/editing/editingSelector';
import contactsSelector from '../../redux/contacts/contactsSelector';

import Button from '../Button';
import { Forma, Input, Label, Span, WraperDiv } from './EditForm.styled';
import { useState, useEffect } from 'react';
import contactsOperations from '../../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { closeModal } from '../../redux/editing/editingSlice';

const EditForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelector.getContacts);

  const id = useSelector(editingSelector.getIdEditing);
  const nameEditing = useSelector(editingSelector.getNameEditing);
  const numberEditing = useSelector(editingSelector.getNumberEditing);

  const [name, setName] = useState(nameEditing);
  const [number, setNumber] = useState(numberEditing);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (name !== nameEditing || number !== numberEditing) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [name, number]);

  useEffect(() => {
    setName(nameEditing);
    setNumber(numberEditing);
  }, [id]);

  const handleChange = e => {
    if (e.target.id === 'name') {
      setName(e.target.value);
    } else {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const updatingContact = {
      id,
      name,
      number,
    };

    // Search for duplicates by name if name edited
    let nameInContacts = false;
    if (name !== nameEditing) {
      nameInContacts = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );
    }
    // Search for duplicates by number if number edited
    let numberInContacts = false;
    if (number !== numberEditing) {
      numberInContacts = contacts.find(contact => contact.number === number);
    }

    // Updating a new contact after verification
    if (!nameInContacts && !numberInContacts) {
      try {
        await dispatch(contactsOperations.updateContact(updatingContact));

        toast.success(` ${name} - edited.`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setName('');
        setNumber('');
        dispatch(closeModal());
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
          Edit
        </Button>
      </WraperDiv>
    </Forma>
  );
};

export default EditForm;
