import { useDispatch } from 'react-redux';

import { MdClose, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';

import contactsOperations from '../../redux/contacts/contactsOperations';
import { Button, ButtonEdit, DivWrapper, PText } from './Contacts.styled';
import { openModal, addContactForEdit } from '../../redux/editing/editingSlice';
import Confirmation from '../Confirmation';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const hadleClick = async id => {
    try {
      await dispatch(contactsOperations.deleteContact(id));
      toast.success(`${contact.name} - deleted.`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleClickEdit = (id, name, number) => {
    dispatch(openModal());
    dispatch(addContactForEdit(id, name, number));
  };

  return (
    <DivWrapper>
      <PText>
        {contact.name}: {contact.number}
      </PText>
      <ButtonEdit
        onClick={() =>
          handleClickEdit(contact.id, contact.name, contact.number)
        }
      >
        <MdEdit size={24} />
      </ButtonEdit>
      <Confirmation
        title="Are you sure you want to delete?"
        confirm={() => hadleClick(contact.id)}
      >
        <Button>
          <MdClose size={24} />
        </Button>
      </Confirmation>
    </DivWrapper>
  );
};

export default Contact;
