import React, { useEffect, useState, useCallback } from 'react';

import { ViewStyle } from 'react-native';
import Shimmer from 'react-native-shimmer';

import { SKELETAL_ITEMS } from 'modules/horoscope/constants';
import { Colors } from 'resources/colors';
import { Container } from 'theme/layout';

const ANIMATION_DELAY = 200;

/**
 * Renders a skeleton view
 */
export function SkeletonView() {
  const renderItem = useCallback((item: ViewStyle & { order: number }) => {
    return <SkeletalItem key={item.order} {...item} />;
  }, []);

  return <Container mt={3}>{SKELETAL_ITEMS.map(renderItem as never)}</Container>;
}

/**
 * Renders the skeletal item
 *
 * @param props - view props
 */
function SkeletalItem(props: ViewStyle) {
  const [loading, setLoading] = useState(false);

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
