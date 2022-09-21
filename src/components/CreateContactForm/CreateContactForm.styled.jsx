import styled from 'styled-components';
export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
export const H1 = styled.h1`
  text-align: center;
  font-weight: 500;
  color: #707070;
`;

export const Form = styled.form`
  
  padding: 10px;
  border-radius: 10px;
  
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 250px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 700px;
  }
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    width: 250px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  color: #8a8a8a;
  transition: all 0.3s ease;
`;
export const StyledInput = styled.input`
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
  background-color: white;
  border-radius: 4px;
  height: 26px;
  padding: 4px 8px;
  color: #707070;

  align-self: flex-end;
  @media (min-width: 768px) {
    padding: 4px 16px;
  }

  cursor: pointer;
  &:hover {
    background-color: orangered;
    color: white;
    outline: none;
  }
`;
