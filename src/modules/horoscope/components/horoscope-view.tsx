import React, { useState } from 'react';

import SegmentedControl, {
  NativeSegmentedControlIOSChangeEvent,
} from '@react-native-segmented-control/segmented-control';
import { useTheme } from '@react-navigation/native';
import { ActivityIndicator, NativeSyntheticEvent } from 'react-native';

import { Day, Sign, StarSignMap } from 'modules/horoscope/constants';
import { useHoroscope } from 'modules/horoscope/hooks';
import { Colors } from 'theme/colors';
import { FontSize } from 'theme/fonts';
import { Container, Fill, Row, ScrollView } from 'theme/layout';
import { ExtraBold, Regular, SemiBold } from 'theme/typography';

import { CompatibleStar, StarSignImage, Title } from './styles';

const Routes = [
  { key: Day.Tomorrow, title: 'Tomorrow' },
  { key: Day.Today, title: 'Today' },
  { key: Day.Yesterday, title: 'Yesterday' },
];

/**
 * Renders the Horoscope view
 *
 * @param props - Horoscope view props
 */
export function HoroscopeView(props: Props) {
  const { sign } = props;
  const [selectedIndex, setSelectedIndex] = useState(1);
  const { data, isLoading } = useHoroscope({ day: Routes[selectedIndex].key, sign });
  const { colors, dark } = useTheme();
  const appearance = dark ? 'dark' : 'light';

  const handleOnChange = (event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => {
    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
  };

  return (
    <Fill>
      <Container px={20} pb={20}>
        <SegmentedControl
          values={Routes.map(item => item.title)}
          selectedIndex={selectedIndex}
          onChange={handleOnChange}
          appearance={appearance}
        />
      </Container>
      <ScrollView px={30}>
        <Container width={140} height={140} alignSelf="center" mb={2}>
          <StarSignImage source={StarSignMap[sign]} />
        </Container>
        <Title color={colors.text}>{sign}</Title>
        {isLoading && !data ? (
          <ActivityIndicator size="large" color={colors.text} />
        ) : (
          <Container>
            <SemiBold fontSize={FontSize.H5} textAlign="center" color={Colors.waterloo}>
              {data?.date_range}
            </SemiBold>
            <Container mt={2}>
              <Row alignItems="center" mb={1}>
                <ExtraBold fontSize={FontSize.H5} color={colors.text}>
                  Mood:
                </ExtraBold>
                <Regular fontSize={FontSize.H5} ml={2} color={colors.text}>
                  {data?.mood}
                </Regular>
              </Row>
              <Row alignItems="center" mb={1}>
                <ExtraBold fontSize={FontSize.H5} color={colors.text}>
                  Color:
                </ExtraBold>
                <Regular fontSize={FontSize.H5} ml={2} color={colors.text}>
                  {data?.color}
                </Regular>
              </Row>
              <Row alignItems="center" mb={1}>
                <ExtraBold fontSize={FontSize.H5} color={colors.text}>
                  Compatibility:
                </ExtraBold>
                <Row ml={2} alignItems="center">
                  <Regular fontSize={FontSize.H5} mr={2} color={colors.text}>
                    {data?.compatibility}
                  </Regular>
                  <CompatibleStar source={StarSignMap[data?.compatibility.toLowerCase() as Sign]} />
                </Row>
              </Row>
              <Row alignItems="center" mb={1}>
                <ExtraBold fontSize={FontSize.H5} color={colors.text}>
                  Lucky number:
                </ExtraBold>
                <Regular fontSize={FontSize.H5} ml={2} color={colors.text}>
                  {data?.lucky_number}
                </Regular>
              </Row>
              <Row alignItems="center" mb={1}>
                <ExtraBold fontSize={FontSize.H5} color={colors.text}>
                  Lucky time:
                </ExtraBold>
                <Regular fontSize={FontSize.H5} ml={2} color={colors.text}>
                  {data?.lucky_time}
                </Regular>
              </Row>
              <Container mb={1}>
                <ExtraBold fontSize={FontSize.H5} color={colors.text}>
                  Description:
                </ExtraBold>
                <Regular fontSize={FontSize.H5} color={colors.text}>
                  {data?.description}
                </Regular>
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
