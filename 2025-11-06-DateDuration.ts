import { CustomTime } from "./2025-10-21-CustomTime.ts";
import { CustomDate, getDaysInMonth } from "./2025-10-22-CustomDate.ts";

class DateDuration {
  // Input
  start: CustomDate;
  end: CustomDate;
  // Output
  years: number;
  months: number;
  days: number;

  constructor(
    startYear: number,
    startMonth: number,
    startDay: number,
    endYear: number,
    endMonth: number,
    endDay: number
  ) {
    this.start = new CustomDate();
    this.start.year = startYear;
    this.start.month = startMonth;
    this.start.day = startDay;
    this.end = new CustomDate();
    this.end.year = endYear;
    this.end.month = endMonth;
    this.end.day = endDay;

    this.years = 0;
    this.months = 0;
    this.days = 0;
  }

  logResult(): void {
    this.getResult();
    console.log(
      `Duration [excluding the end date]: ${this.years} year(s), ${this.months} month(s), ${this.days} day(s)`
    );
  }

  getResult(): void {
    this.years = this.end.year - this.start.year;
    this.months = this.end.month - this.start.month;
    this.days = this.end.day - this.start.day;

    // 日期分層借位：日借位 => 月借位
    if (this.days < 0) {
      let prevMonth: number = this.end.month - 1;
      let prevMonthYear: number = this.end.year;
      if (prevMonth === 0) {
        prevMonth = 12;
        prevMonthYear -= 1;
      }
      const daysInPrevMonth: number = getDaysInMonth(prevMonthYear, prevMonth);
      this.days += daysInPrevMonth; // 加前一個月的天數
      this.months -= 1;
    }

    if (this.months < 0) {
      this.months += 12;
      this.years -= 1; // 扣除尚未屆滿一年的年數
    }
  }
}

const d1 = new DateDuration(2025, 10, 31, 2027, 1, 1);
d1.logResult();

const d2 = new DateDuration(2024, 5, 31, 2025, 6, 1);
d2.logResult();
