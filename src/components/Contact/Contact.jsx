import PropTypes from 'prop-types';
import { Button, ContactItem } from './Contact.styled';
export const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <ContactItem>
      <p>
        {name} : {number}
      </p>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
