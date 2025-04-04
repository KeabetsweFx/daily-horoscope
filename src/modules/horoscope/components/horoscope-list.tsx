import React, { memo, useCallback } from 'react';

import { Box, Stack, Tiles } from '@mobily/stacks';
import { useNavigation, useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { useTileHeight } from 'hooks/tile-height';
import { Sign, StarSigns } from 'modules/horoscope/constants';
import { StarSign } from 'modules/horoscope/types';
import { Routes } from 'modules/navigation/routes';
import { Container, Fill, ScrollView } from 'theme/layout';
import { StarSignImage, StarSignTitle } from './styles';

const GRID_COLUMN_NUM = 3;

/**
 * Renders the horoscope list component
 */
function HoroscopeListComponent() {
  const { getTileHeight } = useTileHeight();
  const navigation = useNavigation<any>();
  const { colors } = useTheme();

  const goToHoroscopeDetails = useCallback(
    (sign: Sign) => {
      navigation.navigate(Routes.Details, { sign });
    },
    [navigation]
  );

  const renderItem = useCallback(
    (item: StarSign) => {
      return (
        <StarSignItem
          onPress={goToHoroscopeDetails}
          key={item.star}
          height={getTileHeight(GRID_COLUMN_NUM)}
          {...item}
        />
      );
    },
    [getTileHeight, goToHoroscopeDetails]
  );

  return (
    <Fill style={{ backgroundColor: colors.background }}>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Box padding={4}>
          <Stack space={4}>
            <Tiles columns={GRID_COLUMN_NUM} space={3}>
              {StarSigns.map(renderItem)}
            </Tiles>
          </Stack>
        </Box>
      </ScrollView>
    </Fill>
  );
}

/**
 * Renders the star sign item component
 *
 * @param props - star sign item props
 */
function StarSignItem(props: StarSignItemProps) {
  const { star, image, height, onPress } = props;
  const { colors } = useTheme();

  const handleOnPress = useCallback(() => {
    onPress(star);
  }, [onPress, star]);

  return (
    <TouchableOpacity key={star} onPress={handleOnPress}>
      <Container height={height}>
        <StarSignImage source={image} contentFit="contain" />
        <StarSignTitle color={colors.text}>{star}</StarSignTitle>
      </Container>
    </TouchableOpacity>
  );
}

export const HoroscopeList = memo(HoroscopeListComponent);

/** Type definitions */
interface StarSignItemProps extends StarSign {
  onPress(sign: Sign): void;
  height: number;
}
