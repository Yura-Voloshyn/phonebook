import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;

  > nav {
    display: flex;
    width: 100%;
  }
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
