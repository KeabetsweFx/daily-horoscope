import React, { useCallback, useState } from 'react';

import { NativeSyntheticEvent } from 'react-native';
import SegmentedControl, {
  NativeSegmentedControlIOSChangeEvent,
} from '@react-native-segmented-control/segmented-control';

import { Sign, Day, StarSignMap } from 'modules/horoscope/constants';
import { useHoroscope } from 'modules/horoscope/hooks';
import { Colors } from 'resources/colors';
import { FontSize } from 'resources/fonts';
import { Fill, Container, Row, ScrollView } from 'theme/layout';
import { SemiBold, ExtraBold, Regular } from 'theme/typography';

import { SkeletonView } from './skeleton-view';
import { StarSignImage, Title, CompatibleStar } from './styles';

const Routes = [
  { key: Day.Today, title: 'Today' },
  { key: Day.Tomorrow, title: 'Tomorrow' },
  { key: Day.Yesterday, title: 'Yesterday' },
];

/**
 * Renders the Horoscope view
 *
 * @param props - Horoscope view props
 */
export function HoroscopeView(props: Props) {
  const { sign } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data, isLoading } = useHoroscope({ day: Routes[selectedIndex].key, sign });

  const handleOnChange = useCallback(
    (event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => {
      setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
    },
    []
  );

  return (
    <Fill>
      <Container px={20} pb={20}>
        <SegmentedControl
          values={Routes.map(item => item.title)}
          selectedIndex={selectedIndex}
          onChange={handleOnChange}
          appearance="light"
        />
      </Container>
      <ScrollView px={30}>
        <Container width={140} height={140} alignSelf="center" mb={2}>
          <StarSignImage source={StarSignMap[sign]} />
        </Container>
        <Title>{sign}</Title>
        {isLoading && !data && <SkeletonView />}
        {data && (
          <Container>
            <SemiBold fontSize={FontSize.H5} textAlign="center" color={Colors.waterloo}>
              {data.date_range}
            </SemiBold>
            <Container mt={2}>
              <Row alignItems="center" mb={1}>
                <ExtraBold fontSize={FontSize.H5}>Mood:</ExtraBold>
                <Regular fontSize={FontSize.H5} ml={2}>
                  {data.mood}
                </Regular>
              </Row>
              <Row alignItems="center" mb={1}>
                <ExtraBold fontSize={FontSize.H5}>Color:</ExtraBold>
                <Regular fontSize={FontSize.H5} ml={2}>
                  {data.color}
                </Regular>
              </Row>
              <Row alignItems="center" mb={1}>
                <ExtraBold fontSize={FontSize.H5}>Compatibility:</ExtraBold>
                <Row ml={2} alignItems="center">
                  <Regular fontSize={FontSize.H5} mr={2}>
                    {data.compatibility}
                  </Regular>
                  <CompatibleStar source={StarSignMap[data.compatibility.toLowerCase() as Sign]} />
                </Row>
              </Row>
              <Row alignItems="center" mb={1}>
                <ExtraBold fontSize={FontSize.H5}>Lucky number:</ExtraBold>
                <Regular fontSize={FontSize.H5} ml={2}>
                  {data.lucky_number}
                </Regular>
              </Row>
              <Row alignItems="center" mb={1}>
                <ExtraBold fontSize={FontSize.H5}>Lucky time:</ExtraBold>
                <Regular fontSize={FontSize.H5} ml={2}>
                  {data.lucky_time}
                </Regular>
              </Row>
              <Container mb={1}>
                <ExtraBold fontSize={FontSize.H5}>Description:</ExtraBold>
                <Regular fontSize={FontSize.H5}>{data.description}</Regular>
              </Container>
            </Container>
          </Container>
        )}
      </ScrollView>
    </Fill>
  );
}
/** Type definitions */
interface Props {
  sign: Sign;
}
