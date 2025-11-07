import { CustomDate } from "./2025-10-22-CustomDate.ts";
import { addYears } from "./2025-10-22-CustomDate.ts";
import { addMonths } from "./2025-10-22-CustomDate.ts";
import { addDays } from "./2025-10-22-CustomDate.ts";
import { CustomTime } from "./2025-10-21-CustomTime.ts";
import { addHours } from "./2025-10-21-CustomTime.ts";
import { addMinutes } from "./2025-10-21-CustomTime.ts";
import { addSeconds } from "./2025-10-21-CustomTime.ts";

class CustomDateTime {
  date: CustomDate;
  time: CustomTime;

  constructor(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number
  ) {
    this.date = new CustomDate();
    this.date.year = year;
    this.date.month = month;
    this.date.day = day;

    this.time = new CustomTime();
    this.time.hour = hour;
    this.time.minute = minute;
    this.time.second = second;
  }
}

function logDateTime(dt: CustomDateTime): void {
  console.log(
    `${dt.date.year}/${dt.date.month}/${dt.date.day} ${dt.time.hour}:${dt.time.minute}:${dt.time.second}`
  );
}

function copyCustomDateTime(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number
): CustomDateTime {
  const result: CustomDateTime = new CustomDateTime(
    year,
    month,
    day,
    hour,
    minute,
    second
  );

  result.date.year = year;
  result.date.month = month;
  result.date.day = day;
  result.time.hour = hour;
  result.time.minute = minute;
  result.time.second = second;

  return result;
}

function addSecondsToDateTime(
  dt: CustomDateTime,
  numOfSeconds: number
): CustomDateTime {
  const result: CustomDateTime = copyCustomDateTime(
    dt.date.year,
    dt.date.month,
    dt.date.day,
    dt.time.hour,
    dt.time.minute,
    dt.time.second
  );
  addBySecondsToDateTime(result, numOfSeconds);

  return result;
}

function addBySecondsToDateTime(
  dt: CustomDateTime,
  numOfSeconds: number
): void {
  const SECONDS_PER_DAY: number = 24 * 60 * 60;
  const SECONDS_PER_HOUR: number = 60 * 60;
  const totalSeconds: number =
    dt.time.hour * SECONDS_PER_HOUR +
    dt.time.minute * 60 +
    dt.time.second +
    numOfSeconds;
  const overflowDays = Math.floor(totalSeconds / SECONDS_PER_DAY);

  dt.date = overflowDays !== 0 ? addDays(dt.date, overflowDays) : dt.date;
  dt.time = addSeconds(dt.time, numOfSeconds);
}

function addMinutesToDateTime(
  dt: CustomDateTime,
  numOfMinutes: number
): CustomDateTime {
  const result: CustomDateTime = copyCustomDateTime(
    dt.date.year,
    dt.date.month,
    dt.date.day,
    dt.time.hour,
    dt.time.minute,
    dt.time.second
  );
  addByMinutesToDateTime(result, numOfMinutes);

  return result;
}

function addByMinutesToDateTime(
  dt: CustomDateTime,
  numOfMinutes: number
): void {
  const MINUTES_PER_DAY: number = 24 * 60;
  const totalMinutes: number =
    dt.time.hour * 60 + dt.time.minute + numOfMinutes;
  const overflowDays: number = Math.floor(totalMinutes / MINUTES_PER_DAY);

  dt.date = overflowDays !== 0 ? addDays(dt.date, overflowDays) : dt.date;
  dt.time = addMinutes(dt.time, numOfMinutes);
}

function addHoursToDateTime(dt: CustomDateTime, numOfHours: number) {
  const result: CustomDateTime = copyCustomDateTime(
    dt.date.year,
    dt.date.month,
    dt.date.day,
    dt.time.hour,
    dt.time.minute,
    dt.time.second
  );
  addByHoursToDateTime(result, numOfHours);

  return result;
}

function addByHoursToDateTime(dt: CustomDateTime, numOfHours: number) {
  const overflowDays: number = Math.floor((dt.time.hour + numOfHours) / 24);

  dt.date = overflowDays !== 0 ? addDays(dt.date, overflowDays) : dt.date;
  dt.time = addHours(dt.time, numOfHours);
}

// const dt = new CustomDateTime(2021, 1, 1, 9, 10, 40);
// logDateTime(addSecondsToDateTime(dt, 300));
// logDateTime(addMinutesToDateTime(dt, 30));
// logDateTime(addHoursToDateTime(dt, 6));
