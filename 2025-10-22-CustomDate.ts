// 自訂資料型態
class CustomDate {
  year: number = 0; // field, property
  month: number = 0; // field, property
  day: number = 0; // field, property
}

const d = new CustomDate();
d.year = 2025;
d.month = 10;
d.day = 21;

function logDate(d: CustomDate) {
  console.log(`${d.year}/${d.month}/${d.day}`);
}

function addYears(d: CustomDate, numOfYears: number): CustomDate {
  const result = new CustomDate();
  result.year = d.year + numOfYears;
  result.month = d.month;
  result.day = d.day;
  return result;
}
// logDate(addYears(d, 30)); // 2055/10/21
// logDate(addYears(d, 3000)); // 5025/10/21
// logDate(addYears(d, -3000)); // -975/10/21
// logDate(addYears(d, -300)); // 1725/10/21

// Question: return type: | null
function addMonths(d: CustomDate, numOfMonths: number): CustomDate {
  const result = new CustomDate();
  result.year = d.year;
  result.month = d.month + numOfMonths;
  result.day = d.day;

  // 正向跨年
  if (result.month > 12) {
    result.year = addYears(
      d,
      Math.ceil((numOfMonths - (12 - d.month)) / 12)
    ).year;
    result.month = (numOfMonths - (12 - d.month)) % 12;
  }
  // 負向跨年
  else if (result.month <= 0) {
    result.year = addYears(d, Math.floor((d.month + numOfMonths) / 12)).year;
    result.month = 12 + ((d.month + numOfMonths) % 12);
  }
  // 該年內
  else {
    result.month = result.month % 12;
  }
  return result;
}
// logDate(addMonths(d, 800)); // 2092/6/21
// logDate(addMonths(d, 80)); // 2032/6/21
// logDate(addMonths(d, 12)); // 2026/10/21
// logDate(addMonths(d, -13)); // 2024/9/21
// logDate(addMonths(d, -33)); // 2023/1/21
// logDate(addMonths(d, -330)); // 1998/4/21

// Question: return type: | null
function addDays(d: CustomDate, numOfDays: number): CustomDate {
  const result = new CustomDate();
  result.year = d.year;
  result.month = d.month;
  result.day = d.day + numOfDays;

  // 正向跨月
  while (result.day > getDaysInMonth(result.year, result.month)) {
    result.day -= getDaysInMonth(result.year, result.month); // 扣除該月天數 （過了該月後，還剩幾天）
    result.month += 1;
    if (result.month > 12) {
      result.month = 1; // 若該月為12月，跨月為1月
      result.year += 1; // 同步更新年份為下一年
    }
  }

  // 負向跨月
  while (result.day <= 0) {
    // 記得包含等號，因為0日為無效日期
    result.month -= 1;
    if (result.month <= 0) {
      result.month = 12; // 若該月為1月，跨月為12月
      result.year -= 1; // 同步更新年份為前一年
    }
    result.day += getDaysInMonth(result.year, result.month);
  }
  return result;
}

function getDaysInMonth(year: number, month: number): number {
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    return 31;
  }
  if ([4, 6, 9, 11].includes(month)) {
    return 30;
  }
  if (month === 2) {
    // 閏年的2月有29天
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
  }
  return 0;
}

logDate(addDays(d, 33)); // 2025/11/23
logDate(addDays(d, 77)); // 2026/1/6
logDate(addDays(d, 342)); // 2026/9/28
logDate(addDays(d, 533)); // 2027/4/7
logDate(addDays(d, -33)); // 2025/9/18
logDate(addDays(d, -77)); // 2025/8/5
logDate(addDays(d, -342)); // 2024/11/13
logDate(addDays(d, -533)); // 2024/5/6

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
