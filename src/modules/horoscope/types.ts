import { Sign } from './constants';

export interface Horoscope {
  current_date: string;
  compatibility: string;
  lucky_time: string;
  lucky_number: string;
  color: string;
  date_range: string;
  mood: string;
  description: string;
}

export interface StarSign {
  star: Sign;
  image: number;
}
