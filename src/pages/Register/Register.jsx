import { useSelector, useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { H2 } from './Register.styled';

import { getAuthError } from 'redux/auth/auth-selectors';

const Register = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <main>
      <H2>Register form</H2>
      <RegisterForm onSubmit={onRegister} />
      {status && <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>}
    </main>
  );
};
export default Register;
