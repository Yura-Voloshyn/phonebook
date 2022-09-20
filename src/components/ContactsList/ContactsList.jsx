import PropTypes from 'prop-types';
import { Section, H2, Wrap, List } from './ContactsList.styled';
import Filter from 'components/Filter';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact, value, onChange }) => {
  return (
    <Section>
      <Wrap>
        <H2>Contacts ({contacts.length})</H2>
        <Filter value={value} onChange={onChange} />
      </Wrap>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        ))}
      </List>
    </Section>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
    })
  ),
};

export default ContactList;
