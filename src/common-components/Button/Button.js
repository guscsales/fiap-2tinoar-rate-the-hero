import styled from 'styled-components';
import {
  FontFamilies,
  FontWeights,
  Colors,
  Shadows,
  BorderRadiuses,
  Spaces,
  FontLetterSpacings,
  FontSizes,
} from '../../shared/DesignTokens';

const Button = styled.button`
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  font-family: ${FontFamilies.PRIMARY};
  font-weight: ${FontWeights.BOLD};
  color: ${Colors.NEUTRAL_WHITE};
  box-shadow: ${Shadows.ONE};
  border-radius: ${BorderRadiuses.ONE};
  padding: ${Spaces.ONE} ${Spaces.TWO};
  cursor: pointer;
  transition: 200ms all ease;
  text-transform: uppercase;
  letter-spacing: ${FontLetterSpacings.MEDIUM};
  font-size: ${FontSizes.ONE_QUARTER};
  background-color: ${(props) =>
    props.ghost ? Colors.GRAY_700 : Colors.BLUE_500};

  &:hover {
    background-color: ${(props) =>
      props.ghost ? Colors.GRAY_700 : Colors.BLUE_550};
  }
`;

export default Button;
