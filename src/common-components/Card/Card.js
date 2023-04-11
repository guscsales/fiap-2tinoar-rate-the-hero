import styled from 'styled-components';
import { BorderRadiuses, Colors } from '../../shared/DesignTokens';

const Card = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${Colors.GRAY_200};
  border-radius: ${BorderRadiuses.ONE};
`;

export default Card;
