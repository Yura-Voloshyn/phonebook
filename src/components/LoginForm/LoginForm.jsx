import { useState } from 'react';
import {
  StyledLoginInput,
  StyledLoginForm,
  InputWrap,
  StyledLabel,
  StyledBtn,
} from './LoginForm.styled';
const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ email, password });
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <InputWrap>
        <StyledLoginInput
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
        <StyledLoginInput
          onChange={handleChange}
          value={password}
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <StyledLabel>Password</StyledLabel>
      </InputWrap>
      <StyledBtn>Login</StyledBtn>
    </StyledLoginForm>
  );
};

export default LoginForm;
