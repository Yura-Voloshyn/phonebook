import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  Form,
  H1,
  InputWrap,
  StyledLabel,
  StyledInput,
  StyledBtn,
  Wrap,
} from './CreateContactForm.styled';

const CreateContactForm = ({ onSubmit }) => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    setContact(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { name, number } = contact;
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setContact({ name: '', number: '' });
  };
  return (
    <Section>
      <H1>Phonebook</H1>
      <Form onSubmit={handleSubmit}>
        <Wrap>
          <InputWrap>
            <StyledInput
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <StyledLabel>Name</StyledLabel>
          </InputWrap>

          <InputWrap>
            <StyledInput
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <StyledLabel>Number</StyledLabel>
          </InputWrap>
          <StyledBtn type="submit">Add contact</StyledBtn>
        </Wrap>
      </Form>
    </Section>
  );
};
CreateContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default CreateContactForm;
