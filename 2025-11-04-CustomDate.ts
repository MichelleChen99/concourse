import { modulo } from "./2025-10-21-CustomTime.ts";
import { getDaysInMonth } from "./2025-10-22-CustomDate.ts";

// 自訂資料型態
class CustomDate {
  year: number = 0;
  month: number = 0;
  day: number = 0;
}

const d = new CustomDate();
d.year = 2021;
d.month = 1;
d.day = 1;

function logDate(d: CustomDate): void {
  console.log(`${d.year}/${d.month}/${d.day}`);
}

function copyDate(d: CustomDate): CustomDate {
  const result = new CustomDate();
  result.year = d.year;
  result.month = d.month;
  result.day = d.day;

  return result;
}

function addYears(d: CustomDate, numOfYears: number): CustomDate {
  const result = copyDate(d);
  addByYears(result, numOfYears);

  return result;
}

function addByYears(d: CustomDate, numOfYears: number): void {
  d.year += numOfYears;
  const daysInTargetMonth: number = getDaysInMonth(d.year, d.month);
  // Adjust day
  d.day = Math.min(d.day, daysInTargetMonth);
}
// const d2 = addYears(d, 30);
// logDate(d2);

function addMonths(d: CustomDate, numOfMonths: number): CustomDate {
  const result = copyDate(d);
  addByMonths(result, numOfMonths);

  return result;
}

function addByMonths(d: CustomDate, numOfMonths: number): void {
  const addedMonths: number = d.month + numOfMonths;
  d.year = d.year + Math.floor((addedMonths - 1) / 12);
  d.month = modulo(addedMonths - 1, 12) + 1;
}
// logDate(addMonths(d, 17));

function addDays(d: CustomDate, numOfDays: number): CustomDate {
  const result = copyDate(d);
  addByDays(result, numOfDays);

  return result;
}

function addByDays(d: CustomDate, numOfDays: number): void {
  let addedDays: number = d.day + numOfDays;
  // 正向跨月
  while (addedDays > getDaysInMonth(d.year, d.month)) {
    addedDays -= getDaysInMonth(d.year, d.month);
    const next = addMonths(d, 1);
    d.year = next.year;
    d.month = next.month;
  }
  // 負向跨月
  while (addedDays <= 0) {
    const prev = addMonths(d, -1);
    d.year = prev.year;
    d.month = prev.month;
    addedDays += getDaysInMonth(d.year, d.month);
  }
  d.day = addedDays;
}
// logDate(addDays(d, 365));
