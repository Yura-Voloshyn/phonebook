import CreateContactForm from 'components/CreateContactForm/CreateContactForm';
import ContactList from 'components/ContactsList/ContactsList';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact,
  removeContact,
} from '../../redux/contacts/contacts-operations';
import { setFilter } from '../../redux/filter/filter-slice';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';

const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(store => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = payload => {
    const action = addContact(payload);
    dispatch(action);
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <main>
      <CreateContactForm onSubmit={onAddContact} />
      <ContactList
        contacts={contacts}
        onDeleteContact={onRemoveContact}
        value={filter}
        onChange={onSetFilter}
      />
    </main>
  );
};
export default Contacts;
