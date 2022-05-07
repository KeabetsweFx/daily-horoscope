import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Sheet } from 'components/sheet';
import { AppScreen } from 'screens/main';
import { FontFamily } from 'resources/fonts';

const Stack = createNativeStackNavigator();

/**
 * Renders the app stack navigator
 */
export function AppStack() {
  const { colors, dark } = useTheme();
  const barStyle = dark ? 'light-content' : 'dark-content';
  const screenOptions = {
    headerTitleStyle: {
      fontFamily: FontFamily.SemiBold,
      fontSize: 18,
      color: colors.text,
    },
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerShadowVisible: false,
  };

  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Daily Horoscope" component={AppScreen} />
      </Stack.Navigator>
      <Sheet />
      <StatusBar barStyle={barStyle} />
    </>
  );
}
