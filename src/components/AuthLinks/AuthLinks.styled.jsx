import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
export const Link = styled(NavLink)`
  transition: all 0.3s ease;
  padding: 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #333333;
  font-weight: 500;
  &.active,
  &:hover {
    color: orangered;
  }
`;
