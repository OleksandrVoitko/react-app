import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// import { useFetchContactsQuery } from '../../redux/contacts/contacts';
import Contact from '../Contact/Contact';
import { Wrapper, Li, Ul } from './ContactsList.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import contactsSelector from '../../redux/contacts/contactsSelector';
import contactsOperations from '../../redux/contacts/contactsOperations';
import { Loader } from '../Loader/Loader';

const ContactsList = ({ setNumberOfContacts, setNumberOfFilteredContacts }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector.getContacts);
  const isLoading = useSelector(contactsSelector.getIsLoading);

  // const { isLoading, data: contacts } = useFetchContactsQuery();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    let filterValue = '';
    if (searchParams.get('filter')) {
      filterValue = searchParams.get('filter');
    }

    if (Array.isArray(contacts)) {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase()),
      );

      setNumberOfContacts(contacts.length);
      setNumberOfFilteredContacts(filteredContacts.length);
    }
  }, [
    isLoading,
    searchParams,
    contacts,
    setNumberOfContacts,
    setNumberOfFilteredContacts,
  ]);

  const getFilterValue = searchParams => {
    if (searchParams.get('filter')) {
      return searchParams.get('filter');
    } else {
      return '';
    }
  };

  const getFilteredContacts = contacts => {
    if (Array.isArray(contacts)) {
      const filteredContacts = contacts.filter(contact =>
        contact.name
          .toLowerCase()
          .includes(getFilterValue(searchParams).toLowerCase()),
      );

      return filteredContacts;
    } else {
      return null;
    }
  };

  return (
    <Wrapper>
      <div>{isLoading && <Loader />}</div>
      <Ul>
        {getFilteredContacts(contacts) &&
          getFilteredContacts(contacts).map(contact => (
            <Li key={contact.id}>
              <Contact contact={contact} />
            </Li>
          ))}
      </Ul>
    </Wrapper>
  );
};

export default ContactsList;
