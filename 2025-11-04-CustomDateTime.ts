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

  logDateTime(): void {
    console.log(
      `${this.date.year}/${this.date.month}/${this.date.day} ${this.time.hour}:${this.time.minute}:${this.time.second}`
    );
  }

  copyCustomDateTime(): CustomDateTime {
    const result: CustomDateTime = new CustomDateTime(
      this.date.year,
      this.date.month,
      this.date.day,
      this.time.hour,
      this.time.minute,
      this.time.second
    );

    return result;
  }

  addSecondsToDateTime(numOfSeconds: number): CustomDateTime {
    const result: CustomDateTime = this.copyCustomDateTime();
    result.addBySecondsToDateTime(numOfSeconds);
    return result;
  }

  addBySecondsToDateTime(numOfSeconds: number): void {
    const SECONDS_PER_HOUR: number = 60 * 60;
    const SECONDS_PER_DAY: number = 24 * 60 * 60;
    const totalSeconds: number =
      this.time.hour * SECONDS_PER_HOUR +
      this.time.minute * 60 +
      this.time.second +
      numOfSeconds;
    const overflowDays = Math.floor(totalSeconds / SECONDS_PER_DAY);

    this.date =
      overflowDays !== 0 ? addDays(this.date, overflowDays) : this.date;
    this.time = addSeconds(this.time, numOfSeconds);
  }

  addMinutesToDateTime(numOfMinutes: number): CustomDateTime {
    const result: CustomDateTime = this.copyCustomDateTime();
    result.addByMinutesToDateTime(numOfMinutes);

    return result;
  }

  addByMinutesToDateTime(numOfMinutes: number): void {
    const totalMinutes: number =
      this.time.hour * 60 + this.time.minute + numOfMinutes;
    const MINUTES_PER_DAY: number = 24 * 60;
    const overflowDays: number = Math.floor(totalMinutes / MINUTES_PER_DAY);

    this.date =
      overflowDays !== 0 ? addDays(this.date, overflowDays) : this.date;
    this.time = addMinutes(this.time, numOfMinutes);
  }

  addHoursToDateTime(numOfHours: number): CustomDateTime {
    const result: CustomDateTime = this.copyCustomDateTime();
    result.addByHoursToDateTime(numOfHours);

    return result;
  }

  addByHoursToDateTime(numOfHours: number): void {
    const overflowDays: number = Math.floor((this.time.hour + numOfHours) / 24);
    this.date =
      overflowDays !== 0 ? addDays(this.date, overflowDays) : this.date;
    this.time = addHours(this.time, numOfHours);
  }

  addDaysToDateTime(numOfDays: number): CustomDateTime {
    const result: CustomDateTime = this.copyCustomDateTime();
    result.addByDaysToDateTime(numOfDays);

    return result;
  }

  addByDaysToDateTime(numOfDays: number): void {
    this.date = addDays(this.date, numOfDays);
  }

  addMonthsToDateTime(numOfMonths: number): CustomDateTime {
    const result: CustomDateTime = this.copyCustomDateTime();
    result.addByMonthsToDateTime(numOfMonths);

    return result;
  }

  addByMonthsToDateTime(numOfMonths: number): void {
    this.date = addMonths(this.date, numOfMonths);
  }

  addYearsToDateTime(numOfYears: number): CustomDateTime {
    const result: CustomDateTime = this.copyCustomDateTime();
    result.addByYearsToDateTime(numOfYears);

    return result;
  }

  addByYearsToDateTime(numOfYears: number): void {
    this.date = addYears(this.date, numOfYears);
  }
}

// const dt = new CustomDateTime(2021, 1, 1, 9, 10, 40);
// dt.addSecondsToDateTime(3000).logDateTime();
// dt.addMinutesToDateTime(309).logDateTime();
// dt.addHoursToDateTime(2).logDateTime();
// dt.addDaysToDateTime(3).logDateTime();
// dt.addMonthsToDateTime(6).logDateTime();
// dt.addYearsToDateTime(4).logDateTime();

/////////////////////////////////////////////////////
// V1.呼叫兩支程式的工具函式 => 移入constructor中
// function getCustomDateTime(
//   year: number,
//   month: number,
//   day: number,
//   hour: number,
//   minute: number,
//   second: number
// ): CustomDateTime {
//   const d: CustomDate = new CustomDate();
//   const t: CustomTime = new CustomTime();
//   const dt = new CustomDateTime(d, t);

//   dt.date.year = year;
//   dt.date.month = month;
//   dt.date.day = day;
//   dt.time.hour = hour;
//   dt.time.minute = minute;
//   dt.time.second = second;

//   return dt;
// }
