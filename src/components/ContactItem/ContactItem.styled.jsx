import styled from 'styled-components';
import { MdDeleteForever, MdOutlineContactPage } from 'react-icons/md';

export const Icon = styled(MdDeleteForever)`
  color: #858585;
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
  &:hover {
    color: #9c0000;
  }
`;
export const ContactIcon = styled(MdOutlineContactPage)`
  color: #757575;
  height: 15px;
  width: 15px;
  @media (min-width: 768px) {
    height: 25px;
    width: 25px;
  }
`;

export const Btn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  gap: 10px;
  & p {
    margin: 0;
    font-size: 10px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
  & button {
    margin-left: auto;
    padding: 2px 4px;
    @media (min-width: 768px) {
      padding: 4px 8px;
    }
  }
`;
