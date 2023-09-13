export type MoonPhase =
  | 'New Moon'
  | 'Waxing Crescent'
  | 'First Quarter'
  | 'Waxing Gibbous'
  | 'Full Moon'
  | 'Waning Gibbous'
  | 'Last Quarter'
  | 'Waning Crescent';

export function getMoonPhase(age: number): MoonPhase {
  if (age === 0) return 'New Moon';
  if (age >= 1 && age <= 6) return 'Waxing Crescent';
  if (age >= 7 && age <= 10) return 'First Quarter';
  if (age >= 11 && age <= 14) return 'Waxing Gibbous';
  if (age >= 15 && age <= 18) return 'Full Moon';
  if (age >= 19 && age <= 22) return 'Waning Gibbous';
  if (age >= 23 && age <= 26) return 'Last Quarter';
  if (age >= 27 && age <= 29) return 'Waning Crescent';
  throw new Error('Invalid moon age');
}
