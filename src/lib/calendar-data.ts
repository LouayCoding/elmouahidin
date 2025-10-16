// Import real Mawaqit data
import { MAWAQIT_PRAYER_DATA, MONTH_NAMES as MAWAQIT_MONTHS } from './mawaqit-data';

// Use the real Mawaqit calendar data
export const CALENDAR_DATA = MAWAQIT_PRAYER_DATA.calendar;

export interface PrayerDay {
  day: number;
  fajr: string;
  shuruq: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

export interface MonthData {
  month: number;
  monthName: string;
  days: PrayerDay[];
}

// Export month and prayer names from Mawaqit data
export const MONTH_NAMES = MAWAQIT_MONTHS;
export const PRAYER_NAMES = ['Fajr', 'Shuruq', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

export function getMonthData(monthIndex: number): MonthData | null {
  if (monthIndex < 0 || monthIndex >= CALENDAR_DATA.length) {
    return null;
  }

  const monthData = CALENDAR_DATA[monthIndex];
  const days: PrayerDay[] = [];

  // Convert the month data to PrayerDay objects
  for (let day = 1; day <= 31; day++) {
    const dayKey = day.toString();
    if (monthData && monthData[dayKey as keyof typeof monthData]) {
      const times = monthData[dayKey as keyof typeof monthData];
      if (times && Array.isArray(times) && times.length >= 6) {
        days.push({
          day,
          fajr: times[0],
          shuruq: times[1],
          dhuhr: times[2],
          asr: times[3],
          maghrib: times[4],
          isha: times[5]
        });
      }
    }
  }

  return {
    month: monthIndex,
    monthName: MONTH_NAMES[monthIndex],
    days
  };
}

export function getCurrentMonth(): number {
  return new Date().getMonth();
}

export function getCurrentDay(): number {
  return new Date().getDate();
}