import PropTypes from 'prop-types';
import { ListItem, Icon, Btn, ContactIcon } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem key={id}>
      <ContactIcon />
      <p>{name}:</p>
      <p>{number}</p>
      <Btn onClick={() => onDeleteContact(id)}>
        <Icon />
      </Btn>
    </ListItem>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func.isRequired,
    })
  ),
};
export default ContactItem;
