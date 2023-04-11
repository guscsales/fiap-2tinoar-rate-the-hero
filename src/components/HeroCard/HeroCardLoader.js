import styled from 'styled-components';
import { Box } from 'reflexbox';
import Card from '../../common-components/Card/Card';
import Caption from '../../common-components/Caption/Caption';
import Description from '../../common-components/Description/Description';
import HeadingTwo from '../../common-components/HeadingTwo/HeadingTwo';
import {
  BorderRadiuses,
  Colors,
  Spaces,
  Shadows,
} from '../../shared/DesignTokens';
import Skeleton from 'react-loading-skeleton';

const InformationGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 70px;
  gap: ${Spaces.TWO};
`;

const HeroAvatarSkeleton = styled(Skeleton)`
  width: 100%;
  height: 70px;
  box-shadow: ${Shadows.ONE};
  border-radius: ${BorderRadiuses.ONE};
`;

export default function HeroCardLoader() {
  return (
    <Card>
      <InformationGrid p={Spaces.TWO}>
        <Box>
          <Caption color={Colors.GRAY_600}>
            <Skeleton />
          </Caption>
          <Box mb={Spaces.ONE}>
            <HeadingTwo>
              <Skeleton />
            </HeadingTwo>
          </Box>
          <Description as="div" color={Colors.GRAY_700}>
            <Skeleton />
          </Description>
          <Description as="div" color={Colors.GRAY_700}>
            <Skeleton />
          </Description>
        </Box>
        <HeroAvatarSkeleton />
      </InformationGrid>
      <Box width="87px" py={Spaces.ONE} px={Spaces.TWO}>
        <Skeleton />
      </Box>
    </Card>
  );
}
