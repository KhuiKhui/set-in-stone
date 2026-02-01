import { months } from '@/constants/months';

export function getDays(monthIndex: number, year: number) {
  const month = months[monthIndex];
  const days = month.days;
  if ((year % 4 == 0 || year % 400 == 0) && year % 100 != 0 && month.num == 2) {
    return days + 1;
  }
  return days;
}
