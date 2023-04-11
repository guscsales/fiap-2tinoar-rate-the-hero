import styled from 'styled-components';
import {
  Colors,
  FontFamilies,
  FontLetterSpacings,
  FontLineHeights,
  FontSizes,
  FontWeights,
} from '../../shared/DesignTokens';

const Caption = styled.span`
  font-family: ${FontFamilies.PRIMARY};
  font-weight: ${FontWeights.REGULAR};
  line-height: ${FontLineHeights.SMALL};
  font-size: ${FontSizes.ONE_HALF};
  color: ${(props) => props.color};
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: ${FontLetterSpacings.MEDIUM};
`;

Caption.defaultProps = {
  color: Colors.NEUTRAL_BLACK,
};

export default Caption;
