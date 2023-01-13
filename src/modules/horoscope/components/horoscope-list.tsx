import React, { memo, useCallback } from 'react';

import { Stack, Box, Tiles } from '@mobily/stacks';
import { TouchableOpacity } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';

import { useTileHeight } from 'hooks/tile-height';
import { StarSigns, Sign } from 'modules/horoscope/constants';
import { StarSign } from 'modules/horoscope/types';
import { Routes } from 'modules/navigation/routes';
import { ScrollView, Fill, Container } from 'theme/layout';
import { StarSignImage, StarSignTitle } from './styles';

const GRID_COLUMN_NUM = 3;

/**
 * Renders the horoscope list component
 */
function HoroscopeListComponent() {
  const { getTileHeight } = useTileHeight();
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

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
    <Fill backgroundColor={colors.background}>
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
        <StarSignImage source={image} resizeMode="contain" />
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
