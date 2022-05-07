import styled from 'styled-components';
import { Image } from 'react-native';
import { FontSize } from 'resources/fonts';
import { Medium, SemiBold } from 'theme/typography';

export const StarSignImage = styled(Image)`
  flex: 1;
  width: null;
  height: null;
`;

export const StarSignTitle = styled(Medium)`
  text-align: center;
  text-transform: capitalize;
  margin-top: 5px;
`;

export const Title = styled(SemiBold)`
  font-size: ${FontSize.H2};
  text-transform: capitalize;
  text-align: center;
`;

export const CompatibleStar = styled(Image)`
  width: 30px;
  height: 30px;
`;
