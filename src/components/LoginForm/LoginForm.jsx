import { useState } from 'react';
import {
  StyledLoginInput,
  StyledLoginForm,
  InputWrap,
  StyledLabel,
  StyledBtn,
} from './LoginForm.styled';
const LoginForm = ({ onSubmit }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { email, password } = user;
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ email, password });
    reset();
  };

  const reset = () => {
    setUser({ email: '', password: '' });
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
