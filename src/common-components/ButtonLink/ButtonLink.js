import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Colors,
  Spaces,
  FontLetterSpacings,
  FontFamilies,
  FontWeights,
  FontSizes,
} from '../../shared/DesignTokens';

const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 40px;
  font-family: ${FontFamilies.PRIMARY};
  font-weight: ${FontWeights.REGULAR};
  color: ${Colors.BLUE_500};
  padding: ${Spaces.ONE} ${Spaces.TWO};
  cursor: pointer;
  transition: 200ms all ease;
  text-transform: uppercase;
  letter-spacing: ${FontLetterSpacings.MEDIUM};
  text-decoration: none;
  font-size: ${FontSizes.ONE_HALF};

  &:hover {
    color: ${Colors.BLUE_550};
  }
`;

export default ButtonLink;
