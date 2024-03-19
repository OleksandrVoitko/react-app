import 'react-toastify/dist/ReactToastify.min.css';

import Button from '../Button';
import { Forma, Input, Label, Span, WraperDiv } from './EditForm.styled';

const EditForm = () => {
  return (
    // <Forma onSubmit={handleSubmit}>
    <Forma>
      <Label htmlFor="name">
        <Span>Name:</Span>
        <Input
          type="text"
          id="name"
          //   value={name}
          //   onChange={handleChange}
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
          //   value={number}
          //   onChange={handleChange}
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
