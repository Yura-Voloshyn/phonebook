import { Link, AuthLinksWrapper } from './AuthLinks.styled';

const AuthLinks = () => {
  return (
    <AuthLinksWrapper>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </AuthLinksWrapper>
  );
};

export default AuthLinks;
