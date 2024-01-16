import { MdClose } from 'react-icons/md';
// import { useDeleteContactMutation } from '../../redux/contacts/contacts';
import { toast } from 'react-toastify';

// import { TailSpin } from 'react-loader-spinner';

import { Button, DivWrapper, PText } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
// import { useSelector } from 'react-redux';
// import contactsSelector from '../../redux/contacts/contactsSelector';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(contactsSelector.getIsLoading);
  // const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const hadleClick = async id => {
    try {
      await dispatch(contactsOperations.deleteContact(id));
      // deleteContact(id);
      toast.success(`Contact: ${contact.name} - deleted!`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <DivWrapper>
      <PText>
        {contact.name}: {contact.number}
      </PText>

      {/* {isLoading ? (
        <TailSpin color="orangered" height={24} width={24} />
      ) : (
        <Button onClick={() => hadleClick(contact.id)}>
          <MdClose size={24} />
        </Button>
      )} */}
      <Button onClick={() => hadleClick(contact.id)}>
        <MdClose size={24} />
      </Button>
    </DivWrapper>
  );
};

export default Contact;
