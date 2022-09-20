import styled from 'styled-components';
export const Input = styled.input`
  margin-left: auto;
  height: 20px;
  transition: all 0.3s ease;
  border: 1px solid #cacaca;
  border-radius: 4px;
  outline: none;
  padding: 2px 4px;
  max-width: 120px;
  @media (min-width: 768px) {
    max-width: 250px;
  }
  &::placeholder {
    color: orangered;
  }
  &:focus {
    border-color: #aaaaaa;
  }
`;
