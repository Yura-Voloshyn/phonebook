import { Container, Header, Link } from './NavBar.styled';
// import { Suspense } from 'react';
import AuthLinks from 'components/AuthLinks/AuthLinks';
import UserMenu from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import useAuth from 'services/api/hooks/useAuth';
export const NavBar = () => {
  const isLogin = useAuth();
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/home">Home</Link>
          {isLogin && <Link to="/contacts">Contacts</Link>}
          {isLogin ? <UserMenu /> : <AuthLinks />}
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
