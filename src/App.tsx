import React, { useEffect, useCallback, useState } from 'react';

import { StacksProvider } from '@mobily/stacks';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { Appearance } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

import { LocalCachedImages } from 'resources/assets';
import { Colors } from 'resources/colors';
import { FONT_FILES } from 'resources/fonts';
import { AppStack } from 'modules/navigation/navigator';
import { Fill } from 'theme/layout';
import { cacheFonts, cacheImages } from 'utils/assets-cache';

const client = new QueryClient();
const isDark = Appearance.getColorScheme() === 'dark';
const NavigationTheme = {
  ...DefaultTheme,
  dark: isDark,
  colors: {
    ...DefaultTheme.colors,
    background: isDark ? Colors['black-pearl'] : Colors.white,
    text: isDark ? Colors.white : Colors['black-pearl'],
  },
};

/**
 * Renders the main app component
 */
export function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const prepare = useCallback(async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      const fontAssets = cacheFonts(FONT_FILES);
      const imageAssets = cacheImages(LocalCachedImages);

      await Promise.all([fontAssets, imageAssets]);
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }, []);

  useEffect(() => {
    prepare();
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={client}>
      <SafeAreaProvider>
        <StacksProvider spacing={4}>
          <Fill onLayout={onLayoutRootView}>
            <NavigationContainer theme={NavigationTheme}>
              <AppStack />
            </NavigationContainer>
          </Fill>
        </StacksProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
