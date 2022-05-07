import React, { useEffect, useState, useCallback } from 'react';

import { ViewStyle, Platform } from 'react-native';
import Shimmer from 'react-native-shimmer';

import { SKELETAL_ITEMS } from 'modules/horoscope/constants';
import { Colors } from 'resources/colors';
import { Container } from 'theme/layout';

const ANIMATION_DELAY = 200;

/**
 * Renders a skeleton view
 */
export function SkeletonView() {
  const renderItem = useCallback((item: ViewStyle, index: number) => {
    return <SkeletalItem key={index} {...item} />;
  }, []);

  return <Container mt={3}>{SKELETAL_ITEMS.map(renderItem as never)}</Container>;
}

/**
 * Renders the skeletal item
 *
 * @param props - view props
 */
function SkeletalItem(props: ViewStyle) {
  const [loading, setLoading] = useState(Platform.select({ ios: false, default: true }));

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, ANIMATION_DELAY);
  }, []);

  return (
    <Shimmer animationOpacity={0.25} animating={loading} style={props}>
      <Container backgroundColor={Colors.alto} {...props} mb={4} />
    </Shimmer>
  );
}
