import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Sheet } from 'components/sheet';
import { AppScreen } from 'screens/main';
import { Colors } from 'resources/colors';
import { FontFamily } from 'resources/fonts';

const Stack = createNativeStackNavigator();

const ScreenOptions = {
  headerTitleStyle: {
    fontFamily: FontFamily.SemiBold,
    fontSize: 18,
    color: Colors.black,
  },
  headerStyle: {
    backgroundColor: Colors.white,
  },
  headerShadowVisible: false,
};

/**
 * Renders the app stack navigator
 */
export function AppStack() {
  return (
    <>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="Daily Horoscope" component={AppScreen} />
      </Stack.Navigator>
      <Sheet />
    </>
  );
}
