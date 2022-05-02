import axios from 'axios';
import qs from 'qs';
import { useQuery } from 'react-query';

import { Sign, Day } from 'modules/horoscope/constants';
import { Horoscope } from 'modules/horoscope/types';

/**
 * Renders the main app screen
 *
 * @param params - Horoscope hook params
 */
export function useHoroscope(params: Params) {
  const encodedValues = qs.stringify(params);

  return useQuery(['horoscope', `${params.sign}:${params.day}`], async () => {
    try {
      const { data } = await axios.post<Horoscope>(
        `https://aztro.sameerkumar.website?${encodedValues}`
      );

      return data;
    } catch (e) {
      throw new Error('Network response was not ok');
    }
  });
}
/** Type definitions */
interface Params {
  day: Day;
  sign: Sign;
}
