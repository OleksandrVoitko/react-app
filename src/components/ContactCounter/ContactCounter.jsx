import { useSearchParams } from 'react-router-dom';
import { TextP, Wraper } from './ContactCounter.styled';

const ContactCounter = ({
  numberOfContacts,
  numberOfFilteredContacts,
  isFiltered,
}) => {
  const [searchParams] = useSearchParams();
  let filteredValue = 0;
  if (searchParams.get('filter')) {
    filteredValue = numberOfFilteredContacts;
  }

  return (
    <Wraper>
      <TextP>
        Total - <span>{numberOfContacts}</span>
      </TextP>
      {isFiltered && (
        <TextP>
          Filtered - <span>{filteredValue}</span>
        </TextP>
      )}
    </Wraper>
  );
};

export default ContactCounter;
