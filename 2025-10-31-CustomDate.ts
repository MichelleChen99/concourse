import { modulo } from "./2025-10-21-CustomTime.ts";
import { getDaysInMonth } from "./2025-10-22-CustomDate.ts";

class CustomDate {
  year: number = 1970;
  month: number = 1;
  day: number = 1;

  logDate(d: CustomDate) {
    console.log(`${d.year}/${d.month}/${d.day}`);
  }

  copyCustomDate() {
    const result = new CustomDate();
    result.year = this.year;
    result.month = this.month;
    result.day = this.day;

    return result;
  }

  addYears(n: number): CustomDate {
    const copied = this.copyCustomDate();
    copied.addByYears(n);
    // 複製物件，再呼叫函式改動資料，等價於：this.copyCustomDate().addByYears(n);
    copied.day = Math.min(
      copied.day,
      getDaysInMonth(copied.year, copied.month)
    ); // 確保copied.day不會超過該月最大天數

    return copied;
  }

  // 直接改動原資料的方法
  addByYears(n: number): void {
    this.year += n; // this會隨著該函式被呼叫的Context而改變
  }

  addMonths(n: number): CustomDate {
    const copied = this.copyCustomDate();
    copied.addByMonths(n);

    return copied;
  }

  addByMonths(n: number): void {
    const totalMonths = this.month + n;
    this.year = this.year + Math.floor((totalMonths - 1) / 12);
    this.month = modulo(totalMonths - 1, 12) + 1;
  }

  addDays(n: number): CustomDate {
    const copied = this.copyCustomDate();
    copied.addByDays(n);

    return copied;
  }

  addByDays(n: number);
}

// function copyCustomDate(date: CustomDate): CustomDate {
//   const result = new CustomDate();
//   result.year = date.year;
//   result.month = date.month;
//   result.day = date.day;

//   return result;
// }
