import { modulo } from "./2025-10-21-CustomTime.ts";
import { getDaysInMonth } from "./2025-10-22-CustomDate.ts";

class CustomDate {
  year: number = 2021;
  month: number = 1;
  day: number = 1;

  logDate(/* this: CustomDate, */) {
    console.log(`${this.year}/${this.month}/${this.day}`);
  }

  copyCustomDate(): CustomDate {
    const result: CustomDate = new CustomDate();
    result.year = this.year;
    result.month = this.month;
    result.day = this.day;

    return result;
  }

  addYears(n: number): CustomDate {
    const copied: CustomDate = this.copyCustomDate();
    copied.addByYears(n);
    // 複製物件，再呼叫函式改動資料，等價於：this.copyCustomDate().addByYears(n);

    return copied;
  }

  // 直接改動原資料的方法
  addByYears(n: number): void {
    this.year += n; // this會隨著該函式被呼叫的Context而改變
    this.day = Math.min(this.day, getDaysInMonth(this.year, this.month)); // 確保copied.day不會超過該月最大天數
  }

  addMonths(n: number): CustomDate {
    const copied: CustomDate = this.copyCustomDate();
    copied.addByMonths(n);

    return copied;
  }

  addByMonths(n: number): void {
    const totalMonths = this.month + n;
    this.year = this.year + Math.floor((totalMonths - 1) / 12);
    this.month = modulo(totalMonths - 1, 12) + 1;
    this.day = Math.min(this.day, getDaysInMonth(this.year, this.month));
  }

  addDays(n: number): CustomDate {
    const copied = this.copyCustomDate();
    copied.addByDays(n);

    return copied;
  }

  addByDays(n: number): void {
    let addedDays: number = this.day + n;
    // 正向跨月
    while (addedDays > getDaysInMonth(this.year, this.month)) {
      addedDays -= getDaysInMonth(this.year, this.month);
      const next = this.addMonths(1);
      this.year = next.year;
      this.month = next.month;
    }
    // 負向跨月
    while (addedDays <= 0) {
      const prev = this.addMonths(-1);
      this.year = prev.year;
      this.month = prev.month;
      addedDays += getDaysInMonth(this.year, this.month);
    }

    this.day = addedDays;
  }
}

// const date: CustomDate = new CustomDate();

// const answer = date.addYears(4);
// answer.logDate();

// date.addYears(15).logDate();
// date.addYears(94).logDate();

// 比較 Class + 外部function 的寫法：
// logDate(addDays(d, 33)); // 有傳參數進去（Class的實例）

/////////////////////////////////////////////////////////////////
// 錯誤寫法：logDate(answer); // 找不到名稱logDate

// 冗餘寫法（傳不必要的參數進去）：
// date.logDate(date.addYears(4)); 也不必為呼叫函式而多加前面的變數
// date.logDate(date.addMonths(15));
// date.logDate(date.addDays(94));
