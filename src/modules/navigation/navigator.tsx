import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appearance, StatusBar } from 'react-native';

import { Sheet } from 'components/sheet';
import { AppScreen } from 'screens/main';
import { Colors } from 'resources/colors';
import { FontFamily } from 'resources/fonts';

const Stack = createNativeStackNavigator();
const colorScheme = Appearance.getColorScheme();
const isDark = colorScheme === 'dark';

const ScreenOptions = {
  headerTitleStyle: {
    fontFamily: FontFamily.SemiBold,
    fontSize: 18,
    color: isDark ? Colors.white : Colors.black,
  },
  headerStyle: {
    backgroundColor: isDark ? Colors['black-pearl'] : Colors.white,
  },
  headerShadowVisible: false,
};

/**
 * Renders the app stack navigator
 */
export function AppStack() {
  const barStyle = isDark ? 'light-content' : 'dark-content';

  return (
    <>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="Daily Horoscope" component={AppScreen} />
      </Stack.Navigator>
      <Sheet />
      <StatusBar barStyle={barStyle} />
    </>
  );
}
