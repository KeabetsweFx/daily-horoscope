import React from 'react';

import { useRoute } from '@react-navigation/native';
import { Sign } from 'modules/horoscope/constants';
import { HoroscopeView } from './horoscope-view';

/**
 * Renders the Horoscope details component
 */
export function HoroscopeDetails() {
  const { params } = useRoute();
  const { sign } = params as Params;

  return <HoroscopeView sign={sign} />;
}

interface Params {
  sign: Sign;
}
