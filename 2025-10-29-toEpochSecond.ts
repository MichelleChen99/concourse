// 求從1970/1/1 0:0:0到給定時間所經歷的epochSeconds（以UTC為基準，無處理時區）
import {
  CustomDateTime,
  getCustomDate,
  getCustomTime,
} from "./2025-10-27-CustomDateTime.ts";
import { getDaysInMonth, isLeapYear } from "./2025-10-22-CustomDate.ts";

function numOfDaysInYear(year: number): number {
  return isLeapYear(year) ? 366 : 365;
}

function toEpochSecond(dateTime: CustomDateTime): number {
  const { date, time } = dateTime; // 解構賦值

  // 累計1970起的整年天數 （不含目標年）
  let yearDays: number = 0;
  for (let y: number = 1970; y < date.year; y++) {
    yearDays += numOfDaysInYear(y);
  }

  // 目標年中，目標月之前的完整天數
  let monthDays: number = 0;
  for (let m: number = 1; m < date.month; m++) {
    monthDays += getDaysInMonth(date.year, m);
  }

  // 天數、時數加總轉秒，算秒數總和
  const daysSinceEpoch: number = yearDays + monthDays + (date.day - 1); // 減1：把「第X天」轉成「已經歷了幾天」
  const SECONDS_PER_DAY: number = 24 * 60 * 60;
  const totalSeconds: number =
    daysSinceEpoch * SECONDS_PER_DAY +
    time.hour * 3600 +
    time.minute * 60 +
    time.second;

  return totalSeconds;
}

console.log(
  toEpochSecond(
    new CustomDateTime(getCustomDate(1970, 1, 2), getCustomTime(0, 0, 0))
  )
); // 86400
console.log(
  toEpochSecond(
    new CustomDateTime(getCustomDate(1995, 4, 17), getCustomTime(16, 30, 48))
  )
); // 798136248
console.log(
  toEpochSecond(
    new CustomDateTime(getCustomDate(2025, 10, 31), getCustomTime(5, 47, 48))
  )
); // 1761889668
