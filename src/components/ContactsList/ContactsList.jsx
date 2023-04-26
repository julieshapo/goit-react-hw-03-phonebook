import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { Container } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <Container>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
