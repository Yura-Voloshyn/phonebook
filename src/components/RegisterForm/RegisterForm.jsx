import {
  StyledRegisterInput,
  StyledRegisterForm,
  InputWrap,
  StyledLabel,
  StyledBtn,
} from './RegisterForm.styled';
import { useState } from 'react';

const RegisterForm = ({ onSubmit }) => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const handleChange = e => {
    setNewUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { name, email, password } = newUser;
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, email, password });
    reset();
  };

  const reset = () => {
    setNewUser({ name: '', email: '', password: '' });
  };
  return (
    <StyledRegisterForm onSubmit={handleSubmit}>
      <InputWrap>
        <StyledRegisterInput
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          required
        />
        <StyledLabel>Name</StyledLabel>
      </InputWrap>
      <InputWrap>
        <StyledRegisterInput
          onChange={handleChange}
          value={email}
          type="email"
          name="email"
          autoComplete="user-email"
          required
        />
        <StyledLabel>Email</StyledLabel>
      </InputWrap>
      <InputWrap>
        <StyledRegisterInput
          onChange={handleChange}
          value={password}
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <StyledLabel>Password</StyledLabel>
      </InputWrap>
      <StyledBtn>Register</StyledBtn>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
