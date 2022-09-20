import { useSelector, useDispatch } from 'react-redux';

import { getAuthError } from 'redux/auth/auth-selectors';
import { login } from 'redux/auth/auth-operations';

import LoginForm from 'components/LoginForm/LoginForm';
import { H2 } from './Login.styled';
const Login = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <main>
      <H2>Login form</H2>
      <LoginForm onSubmit={onLogin} />
      {status && <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>}
    </main>
  );
};
export default Login;
