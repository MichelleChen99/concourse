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

function addDays(d: CustomDate, numOfDays: number): CustomDate | null {
  const result = new CustomDate();
  return null;
}

function addMonths(d: CustomDate, numOfMonths: number): CustomDate | null {
  return null;
}

function addYears(d: CustomDate, numOfYears: number): CustomDate {
  const result = new CustomDate();
  result.year = d.year + numOfYears;
  result.month = d.month;
  result.day = d.day;
  return result;
}
