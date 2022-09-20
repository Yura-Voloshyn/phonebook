import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
  padding-right: 16px;
`;

export const StyledImg = styled.img`
  border-radius: 50%;
`;

export const StyledBtn = styled.button`
  transition: all 0.3s ease;
  border: 1px solid #cacaca;
  border-radius: 4px;
  width: 80px;
  padding: 4px 8px;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    background-color: orangered;
    color: white;
    outline: none;
  }
`;
