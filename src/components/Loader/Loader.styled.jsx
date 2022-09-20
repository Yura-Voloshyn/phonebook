import styled from 'styled-components';
import { FallingLines } from 'react-loader-spinner';
export const WrapLoad = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const AnimationLoader = styled(FallingLines)`
  height: 80;
  width: 80;
`;
