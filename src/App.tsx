import React, { useEffect, useCallback, useState } from 'react';

import { StacksProvider } from '@mobily/stacks';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

import { LocalCachedImages } from 'resources/assets';
import { FONT_FILES } from 'resources/fonts';
import { AppStack } from 'modules/navigation/navigator';
import { Fill } from 'theme/layout';
import { cacheFonts, cacheImages } from 'utils/assets-cache';

const client = new QueryClient();

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
            <NavigationContainer>
              <AppStack />
            </NavigationContainer>
          </Fill>
        </StacksProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
