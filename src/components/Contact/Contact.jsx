import { useDispatch } from 'react-redux';

import { MdClose, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';

import contactsOperations from '../../redux/contacts/contactsOperations';
import { Button, ButtonEdit, DivWrapper, PText } from './Contacts.styled';

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

  return (
    <DivWrapper>
      <PText>
        {contact.name}: {contact.number}
      </PText>
      <ButtonEdit>
        <MdEdit size={24} />
      </ButtonEdit>
      <Button onClick={() => hadleClick(contact.id)}>
        <MdClose size={24} />
      </Button>
    </DivWrapper>
  );
};

export default Contact;
