import 'react-toastify/dist/ReactToastify.min.css';

import { useSelector } from 'react-redux';
import editingSelector from '../../redux/editing/editingSelector';

import Button from '../Button';
import { Forma, Input, Label, Span, WraperDiv } from './EditForm.styled';
import { useState, useEffect } from 'react';

const EditForm = () => {
  const id = useSelector(editingSelector.getIdEditing);
  const nameEditing = useSelector(editingSelector.getNameEditing);
  const numberEditing = useSelector(editingSelector.getNumberEditing);

  const [name, setName] = useState(nameEditing);
  const [number, setNumber] = useState(numberEditing);

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

  return (
    // <Forma onSubmit={handleSubmit}>
    <Forma>
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
        <Button type="submit">Edit</Button>
      </WraperDiv>
    </Forma>
  );
};

export default EditForm;
