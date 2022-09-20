import styled from 'styled-components';
export const Section = styled.section`
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const H2 = styled.h1`
  font-weight: 500;
  font-size: 18px;

  color: #707070;
`;

export const Wrap = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 250px;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 250px;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 700px;
  }
`;
