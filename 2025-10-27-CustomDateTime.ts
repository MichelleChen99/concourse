import { CustomDate } from "./2025-10-22-CustomDate.ts";
import { addYears } from "./2025-10-22-CustomDate.ts";
import { addMonths } from "./2025-10-22-CustomDate.ts";
import { addDays } from "./2025-10-22-CustomDate.ts";
import { CustomTime } from "./2025-10-21-CustomTime.ts";
import { addHours } from "./2025-10-21-CustomTime.ts";
import { addMinutes } from "./2025-10-21-CustomTime.ts";
import { addSeconds } from "./2025-10-21-CustomTime.ts";

export class CustomDateTime {
  date: CustomDate;
  time: CustomTime;

  constructor(date: CustomDate, time: CustomTime) {
    this.date = date;
    this.time = time;
  }
}
const d = new CustomDate();
export function getCustomDate(year: number, month: number, day: number) {
  d.year = year;
  d.month = month;
  d.day = day;
  return d;
}
getCustomDate(2025, 10, 21);

const t = new CustomTime();
export function getCustomTime(hour: number, minute: number, second: number) {
  t.hour = hour;
  t.minute = minute;
  t.second = second;
  return t;
}
getCustomTime(20, 12, 59);

const dt = new CustomDateTime(d, t);
// console.log(dt);

export function logDateTime(dt: CustomDateTime) {
  console.log(
    `${dt.date.year}/${dt.date.month}/${dt.date.day} ${dt.time.hour}:${dt.time.minute}:${dt.time.second}`
  );
}

const SECONDS_PER_DAY = 24 * 60 * 60;

export function addSecondsToDateTime(
  dt: CustomDateTime,
  numOfSeconds: number
): CustomDateTime {
  // 計算溢位的天數
  const totalSeconds =
    dt.time.hour * 3600 + dt.time.minute * 60 + dt.time.second + numOfSeconds;
  const overflowDays = Math.floor(totalSeconds / SECONDS_PER_DAY);

  const newDate = overflowDays !== 0 ? addDays(dt.date, overflowDays) : dt.date;
  const newTime = addSeconds(dt.time, numOfSeconds);

  return new CustomDateTime(newDate, newTime);
}

// logDateTime(addSecondsToDateTime(dt, 30)); // 2025/10/21 20:13:29
// logDateTime(addSecondsToDateTime(dt, 120000)); // 2025/10/23 5:32:59
// logDateTime(addSecondsToDateTime(dt, -600000)); // 2025/10/14 21:32:59
// logDateTime(addSecondsToDateTime(dt, -12345678)); // 2025/5/31 22:51:41

function m(dt: CustomDateTime) {
  dt.date.day = 100;
}
// console.log(dt);
// console.log(m(dt)); // undefined
// dt = ?

function addMinutesToDateTime(
  dt: CustomDateTime,
  numOfMinutes: number
): CustomDateTime {
  const totalMinutes = dt.time.hour * 60 + dt.time.minute + numOfMinutes;
  const overflowDays = Math.floor(totalMinutes / 1440);

  const newDate = overflowDays !== 0 ? addDays(dt.date, overflowDays) : dt.date;
  const newTime = addMinutes(dt.time, numOfMinutes);

  return new CustomDateTime(newDate, newTime);
}

// logDateTime(addMinutesToDateTime(dt, 30)); // 2025/10/21 20:42:59
// logDateTime(addMinutesToDateTime(dt, 60000)); // 2025/12/2 12:12:59
// logDateTime(addMinutesToDateTime(dt, -6000)); // 2025/10/17 16:12:59
// logDateTime(addMinutesToDateTime(dt, -33984)); // 2025/9/28 5:48:59

function addHoursToDateTime(
  dt: CustomDateTime,
  numOfHours: number
): CustomDateTime {
  const overflowDays = Math.floor((dt.time.hour + numOfHours) / 24);

  const newDate = overflowDays !== 0 ? addDays(dt.date, overflowDays) : dt.date;
  const newTime = addHours(dt.time, numOfHours);

  return new CustomDateTime(newDate, newTime);
}

// logDateTime(addHoursToDateTime(dt, 4)); // 2025/10/22 0:12:59
// logDateTime(addHoursToDateTime(dt, 200)); // 2025/10/30 4:12:59
// logDateTime(addHoursToDateTime(dt, -30)); // 2025/10/20 14:12:59
// logDateTime(addHoursToDateTime(dt, -17520)); // 2023/10/22 20:12:59

function addDaysToDateTime(
  dt: CustomDateTime,
  numOfDays: number
): CustomDateTime {
  const newDate = addDays(dt.date, numOfDays);
  const newTime = dt.time;
  return new CustomDateTime(newDate, newTime);
}

// logDateTime(addDaysToDateTime(dt, -3650)); // 2015/10/24 20:12:59

function addMonthsToDateTime(
  dt: CustomDateTime,
  numOfMonths: number
): CustomDateTime {
  const newDate = addMonths(dt.date, numOfMonths);
  const newTime = dt.time;
  return new CustomDateTime(newDate, newTime);
}

// logDateTime(addMonthsToDateTime(dt, -120)); // 2015/10/21 20:12:59

function addYearsToDateTime(
  dt: CustomDateTime,
  numOfYears: number
): CustomDateTime {
  const newDate = addYears(dt.date, numOfYears);
  const newTime = dt.time;
  return new CustomDateTime(newDate, newTime);
}

// logDateTime(addYearsToDateTime(dt, -10)); // 2015/10/21 20:12:59
