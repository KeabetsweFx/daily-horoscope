import { Images } from 'resources/assets';

export enum Day {
  Today = 'today',
  Tomorrow = 'tomorrow',
  Yesterday = 'yesterday',
}

export enum Sign {
  Aries = 'aries',
  Taurus = 'taurus',
  Gemini = 'gemini',
  Cancer = 'cancer',
  Leo = 'leo',
  Virgo = 'virgo',
  Libra = 'libra',
  Scorpio = 'scorpio',
  Sagittarius = 'sagittarius',
  Capricorn = 'capricorn',
  Aquarius = 'aquarius',
  Pisces = 'pisces',
}

export const StarSigns = [
  { star: Sign.Aries, image: Images['aries-sign'] },
  { star: Sign.Taurus, image: Images['taurus-sign'] },
  { star: Sign.Gemini, image: Images['gemini-sign'] },
  { star: Sign.Cancer, image: Images['cancer-sign'] },
  { star: Sign.Leo, image: Images['leo-sign'] },
  { star: Sign.Virgo, image: Images['virgo-sign'] },
  { star: Sign.Libra, image: Images['libra-sign'] },
  { star: Sign.Scorpio, image: Images['scorpio-sign'] },
  { star: Sign.Sagittarius, image: Images['sagittarius-sign'] },
  { star: Sign.Capricorn, image: Images['capricorn-sign'] },
  { star: Sign.Aquarius, image: Images['aquarius-sign'] },
  { star: Sign.Pisces, image: Images['pisces-sign'] },
];

export const StarSignMap = {
  [Sign.Aries]: Images.aries,
  [Sign.Taurus]: Images.taurus,
  [Sign.Gemini]: Images.gemini,
  [Sign.Cancer]: Images.cancer,
  [Sign.Leo]: Images.leo,
  [Sign.Virgo]: Images.virgo,
  [Sign.Libra]: Images.libra,
  [Sign.Scorpio]: Images.scorpio,
  [Sign.Sagittarius]: Images.sagittarius,
  [Sign.Capricorn]: Images.capricorn,
  [Sign.Aquarius]: Images.aquarius,
  [Sign.Pisces]: Images.pisces,
};

export const SKELETAL_ITEMS = [
  { order: 1, height: 25, width: '50%', borderRadius: 10, alignSelf: 'center', marginBottom: 20 },
  {
    order: 2,
    height: 20,
    width: '70%',
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  {
    order: 4,
    height: 20,
    width: '80%',
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  {
    order: 5,
    height: 20,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  {
    order: 6,
    height: 20,
    width: '95%',
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  {
    order: 7,
    height: 120,
    width: '100%',
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
];
