import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';
import { UserMenuWrap, StyledImg, StyledBtn } from './UserMenu.styled';
const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());

  return (
    <UserMenuWrap>
      <StyledImg
        src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
        alt="user-name"
        width="30"
        height="30"
      />
      <p>{email}</p>
      <StyledBtn onClick={onLogout}>Logout</StyledBtn>
    </UserMenuWrap>
  );
};
export default UserMenu;
