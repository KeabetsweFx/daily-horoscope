import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Image } from 'react-native';

export const cacheImages = (images: AssetType[]) =>
  images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

export const cacheFonts = (fonts: FontMap) => Font.loadAsync(fonts);

/** Type definitions */
export type AssetType = string | number;
export type FontMap = string | { [fontFamily: string]: Font.FontSource };
