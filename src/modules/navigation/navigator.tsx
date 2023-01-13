import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Sheet } from 'components/sheet';
import { AppScreen } from 'screens/main';
import { HoroscopeDetailScreen } from 'screens/horoscope-details';
import { FontFamily } from 'resources/fonts';
import { Routes } from './routes';

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
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerShadowVisible: false,
    headerBackImage: () => null,
  };

  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={Routes.Home} component={AppScreen} />
        <Stack.Screen
          name={Routes.Details}
          component={HoroscopeDetailScreen}
          options={{ presentation: 'modal' }}
        />
      </Stack.Navigator>
      <Sheet />
      <StatusBar barStyle={barStyle} />
    </>
  );
}
