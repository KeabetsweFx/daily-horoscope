/* eslint-disable global-require */
/**
 * Provides fonts for the app
 */
import { Asset } from 'expo-asset';

export type FontSource = string | number | Asset;
export type NameOrMap = string | { [name: string]: FontSource };

export const FONT_FILES = {
  'Nunito-ExtraBold': require('assets/fonts/Nunito-ExtraBold.ttf'),
  'Nunito-Bold': require('assets/fonts/Nunito-Bold.ttf'),
  'Nunito-Light': require('assets/fonts/Nunito-Light.ttf'),
  'Nunito-Black': require('assets/fonts/Nunito-Black.ttf'),
  'Nunito-Regular': require('assets/fonts/Nunito-Regular.ttf'),
  'Nunito-Medium': require('assets/fonts/Nunito-Medium.ttf'),
  'Nunito-SemiBold': require('assets/fonts/Nunito-SemiBold.ttf'),
};

export enum FontSize {
  Tiny = '10px',
  Mini = '12px',
  Small = '14px',
  Regular = '15px',
  Medium = '16px',
  H5 = '17px',
  H4 = '18px',
  H3 = '20px',
  H2 = '25px',
  H1 = '30px',
  Title = '35px',
  Jumbo = '40px',
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
