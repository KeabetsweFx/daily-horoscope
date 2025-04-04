import { ThemeProvider } from '@emotion/react';
import { StacksProvider } from '@mobily/stacks';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppStack } from 'modules/navigation/navigator';
import { Colors } from 'theme/colors';
import { FONT_FILES } from 'theme/fonts';
import { LocalCachedImages } from 'theme/images';
import { Fill } from 'theme/layout';
import { theme } from 'theme/theme';
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
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <SafeAreaProvider>
          <StacksProvider spacing={4}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Fill onLayout={onLayoutRootView}>
                <NavigationContainer theme={NavigationTheme}>
                  <AppStack />
                </NavigationContainer>
              </Fill>
            </GestureHandlerRootView>
          </StacksProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
