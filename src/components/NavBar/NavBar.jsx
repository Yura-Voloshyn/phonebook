import { Container, Header, Link, Nav } from './NavBar.styled';
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
        <Nav>
          <Link to="/home">Home</Link>
          {isLogin && <Link to="/contacts">Contacts</Link>}
          {isLogin ? <UserMenu /> : <AuthLinks />}
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
};
