import { State } from 'components/sheet';

export const SHEET_ROUTES: Record<string, Omit<State, 'isVisible'>> = {
  horoscope: {
    snapPoints: ['90%'],
  },
};
