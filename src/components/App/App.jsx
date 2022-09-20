import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operations';
import { StyledAppWrap } from './App.styled';
import { NavBar } from 'components/NavBar/NavBar';
import UserRoutes from 'components/UserRoutes/UserRoutes';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <StyledAppWrap>
      <NavBar />
      <UserRoutes />
    </StyledAppWrap>
  );
};
export default App;
