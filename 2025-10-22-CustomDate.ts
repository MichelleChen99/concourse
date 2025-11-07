import { modulo } from "./2025-10-21-CustomTime.ts";

// 自訂資料型態
export class CustomDate {
  year: number = 0; // field, property
  month: number = 0; // field, property
  day: number = 0; // field, property
}

const d = new CustomDate();
d.year = 2025;
d.month = 10;
d.day = 21;

export function logDate(d: CustomDate) {
  console.log(`${d.year}/${d.month}/${d.day}`);
}

export function addYears(d: CustomDate, numOfYears: number): CustomDate {
  const result = new CustomDate();
  result.year = d.year + numOfYears;
  result.month = d.month;
  result.day = d.day;

  // 自動修正非法日期，包括閏年的調整
  const daysInTargetMonth = getDaysInMonth(result.year, result.month);
  if (result.day > daysInTargetMonth) {
    result.day = daysInTargetMonth;
  }

  return result;
}

// logDate(addYears(d, 3000)); // 5025/10/21
// logDate(addYears(d, -3000)); // -975/10/21
// logDate(addYears(d, -300)); // 1725/10/21

export function addMonths(d: CustomDate, numOfMonths: number): CustomDate {
  const result = new CustomDate();
  const totalMonths = d.month + numOfMonths;
  result.year = d.year + Math.floor((totalMonths - 1) / 12); // 將月換算成0-based（數學運算從0開始），計算要跨幾年
  result.month = modulo(totalMonths - 1, 12) + 1; // 將月換算成0-based，最後再加回去，得到月份在1-12之間（轉回人類世界）的正確結果
  result.day = d.day;

  const daysInTargetMonth = getDaysInMonth(result.year, result.month);
  if (result.day > daysInTargetMonth) {
    result.day = daysInTargetMonth;
  }
  return result;
}

// logDate(addMonths(d, 800)); // 2092/6/21
// logDate(addMonths(d, 80)); // 2032/6/21
// logDate(addMonths(d, 12)); // 2026/10/21
// logDate(addMonths(d, -13)); // 2024/9/21
// logDate(addMonths(d, -33)); // 2023/1/21
// logDate(addMonths(d, -330)); // 1998/4/21

export function addDays(d: CustomDate, numOfDays: number): CustomDate {
  const result = new CustomDate();
  result.year = d.year;
  result.month = d.month;
  result.day = d.day;

  let addedDays: number = d.day + numOfDays;

  // 正向跨月
  while (addedDays > getDaysInMonth(result.year, result.month)) {
    addedDays -= getDaysInMonth(result.year, result.month);
    const next = addMonths(result, 1); // 呼叫addMonths統一處理年、月進位，不在此推算應達月份 （非責任範圍）。
    result.year = next.year;
    result.month = next.month;
    // 先扣再進位，扣掉的是當前月的天數
  }
  // 負向跨月
  while (addedDays <= 0) {
    // 記得包含等號，因為0日為無效日期
    const prev = addMonths(result, -1);
    result.year = prev.year;
    result.month = prev.month;
    addedDays += getDaysInMonth(result.year, result.month);
    // 先退位再加，加回的是前個月的天數
  }

  result.day = addedDays;
  return result;
}

export function getDaysInMonth(year: number, month: number): number {
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    return 31;
  }
  if ([4, 6, 9, 11].includes(month)) {
    return 30;
  }
  if (month === 2) {
    // 閏年的2月有29天
    return isLeapYear(year) ? 29 : 28;
  }
  throw new Error(`Invalid month: ${month}`);
  // 避免只寫return 0，這樣會導致addDays()中的while陷入無限迴圈
}

export function isLeapYear(year: number) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

// logDate(addDays(d, 33)); // 2025/11/23
// logDate(addDays(d, 77)); // 2026/1/6
// logDate(addDays(d, 342)); // 2026/9/28
// logDate(addDays(d, 533)); // 2027/4/7
// logDate(addDays(d, -33)); // 2025/9/18
// logDate(addDays(d, -77)); // 2025/8/5
// logDate(addDays(d, -342)); // 2024/11/13
// logDate(addDays(d, -533)); // 2024/5/6

// 錯誤寫法：
// 計算各月所含天數：
//   const allMonths: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//   const daysOfMonth = {
//     days28: [2],
//     days30: [4, 6, 9, 11],
//     days31: [1, 3, 5, 7, 8, 10, 12],
//   };
//   let i: number = result.month === 12 ? 0 : result.month; // 從次月開始按月加天數
//   let count: number = 0;
//   while (count < result.day) {
//     let monthLoop = false;
//     if (daysOfMonth.days31.find((month) => month === allMonths[i])) {
//       count += 31;
//       i === 11 ? (i = 0) : i++;
//       monthLoop = true;
//     } else if (daysOfMonth.days30.find((month) => month === allMonths[i])) {
//       count += 30;
//       i === 11 ? (i = 0) : i++;
//       monthLoop = true;
//     } else if (daysOfMonth.days28.find((month) => month === allMonths[i])) {
//       count += 28;
//       i === 11 ? (i = 0) : i++;
//       monthLoop = true;
//     }
//   }

//   // 大月
//   if (result.day > 31 && daysOfMonth.days31.includes(result.month)) {
//     result.month = addMonths(result, result.day - d.day / 31);
//     result.day = (result.day - d.day) % 31;
//   }
//   // 小月
//   else if (result.day > 30 && daysOfMonth.days30.includes(result.month)) {
//     result.day = result.day % 30;
//   }
//   // 二月
//   else if (result.day > 29 && daysOfMonth.days28.includes(result.month)) {
//     result.day = result.day % 29;
//   }

// addDays: no reuse addMinutes() version
// const result = new CustomDate();
// result.year = d.year;
// result.month = d.month;
// result.day = d.day + numOfDays;

// 正向跨月、年
// while (result.day > getDaysInMonth(result.year, result.month)) {
//   result.day -= getDaysInMonth(result.year, result.month); // 扣除該月天數 （過了該月後，還剩幾天）

//   result.month += 1;
//   if (result.month > 12) {
//     result.month = 1; // 若該月為12月，跨月為1月
//     result.year += 1; // 同步更新年份為下一年
//   }
// }

// // 負向跨月、年
// while (result.day <= 0) {
//   // 記得包含等號，因為0日為無效日期
//   result.month -= 1;
//   if (result.month <= 0) {
//     result.month = 12; // 若該月為1月，跨月為12月
//     result.year -= 1; // 同步更新年份為前一年
//   }
//   result.day += getDaysInMonth(result.year, result.month);
// }
