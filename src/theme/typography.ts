import styled from '@emotion/native';
import {
  ColorProps,
  SpaceProps,
  TypographyProps,
  color,
  space,
  typography,
} from '@techstack/styled-system';
import { Text, TextProps, ViewStyle } from 'react-native';

import { Colors } from 'theme/colors';
import { FontFamily, FontSize } from 'theme/fonts';

export type NativeTextProps = ViewStyle & ColorProps & TypographyProps & TextProps & SpaceProps;

export const Normal = styled(Text)<
  ViewStyle & ColorProps & TypographyProps & TextProps & SpaceProps
>`
  color: ${Colors.black};
  font-size: ${FontSize.Regular};
  font-family: ${FontFamily.Regular};
  text-align: left;
  ${color};
  ${space};
  ${typography};
`;

export const Black = styled(Normal)`
  font-family: ${FontFamily.Black};
`;

export const Regular = styled(Normal)`
  font-family: ${FontFamily.Regular};
`;

export const Medium = styled(Normal)`
  font-family: ${FontFamily.Medium};
`;

export const ExtraBold = styled(Normal)`
  font-family: ${FontFamily.ExtraBold};
`;

export const Bold = styled(Normal)`
  font-family: ${FontFamily.Bold};
`;

export const SemiBold = styled(Normal)`
  font-family: ${FontFamily.SemiBold};
`;

export const Light = styled(Normal)`
  font-family: ${FontFamily.Light};
`;
