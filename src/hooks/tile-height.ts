import { useSpacingHelpers } from '@mobily/stacks';
import { useWindowDimensions } from 'react-native';

const MULTIPLE_FACTOR = 3;

/**
 * Provides a method that calculate the tile height for
 * a grid
 */
export function useTileHeight() {
  const { width } = useWindowDimensions();
  const { multiply } = useSpacingHelpers();
  const getTileHeight = (n: number) =>
    (width - multiply(n) * 2 - multiply(2) * MULTIPLE_FACTOR) / n;

  return { getTileHeight };
}
