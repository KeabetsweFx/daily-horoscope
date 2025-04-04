/* eslint-disable global-require */
/**
 * Provides fonts for the app
 */
import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from '@expo-google-fonts/nunito';
import { Asset } from 'expo-asset';

export type FontSource = string | number | Asset;
export type NameOrMap = string | { [name: string]: FontSource };

export const FONT_FILES = {
  'Nunito-ExtraBold': Nunito_800ExtraBold,
  'Nunito-Bold': Nunito_700Bold,
  'Nunito-Light': Nunito_300Light,
  'Nunito-Black': Nunito_900Black,
  'Nunito-Regular': Nunito_400Regular,
  'Nunito-Medium': Nunito_500Medium,
  'Nunito-SemiBold': Nunito_600SemiBold,
};

export enum FontSize {
  Tiny = 10,
  Mini = 12,
  Small = 14,
  Regular = 15,
  Medium = 16,
  H5 = 17,
  H4 = 18,
  H3 = 20,
  H2 = 25,
  H1 = 30,
  Title = 35,
  Jumbo = 40,
}

export enum FontFamily {
  ExtraBold = 'Nunito-ExtraBold',
  Bold = 'Nunito-Bold',
  Black = 'Nunito-Black',
  Light = 'Nunito-Light',
  Medium = 'Nunito-Medium',
  SemiBold = 'Nunito-SemiBold',
  Regular = 'Nunito-Regular',
}
