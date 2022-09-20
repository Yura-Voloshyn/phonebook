import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  color: #8a8a8a;
  transition: all 0.3s ease;
`;
export const StyledLoginInput = styled.input`
  height: 20px;
  transition: all 0.3s ease;
  border: 1px solid #cacaca;
  border-radius: 4px;
  outline: none;
  padding: 2px 4px;
  &:focus {
    border-color: #aaaaaa;

    + label {
      color: orangered;
    }
  }
`;

export const StyledBtn = styled.button`
  transition: all 0.3s ease;
  border: 1px solid #cacaca;
  border-radius: 4px;
  width: 120px;
  padding: 8px 16px;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    background-color: orangered;
    color: white;
    outline: none;
  }
`;
