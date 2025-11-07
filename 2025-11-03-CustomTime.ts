import { modulo } from "./2025-10-21-CustomTime.ts";

class CustomTime {
  hour: number = 9;
  minute: number = 10;
  second: number = 10;

  logTime(/* this: CustomTimes */) {
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

  copyCustomTime(): CustomTime {
    const result = new CustomTime();
    result.hour = this.hour;
    result.minute = this.minute;
    result.second = this.second;

    return result;
  }

  // 產生 1 個 CustomTime 物件
  addHours(n: number): CustomTime {
    const copied: CustomTime = this.copyCustomTime();
    copied.addByHours(n);

    return copied;
  }

  // 產生 0 個 CustomTime 物件
  addByHours(n: number): void {
    this.hour = modulo(this.hour + n, 24);
  }

  // 產生 2 個 CustomTime 物件
  addMinutes(n: number): CustomTime {
    const copied: CustomTime = this.copyCustomTime();
    copied.addByMinutes(n);

    return copied;
  }

  // 產生 1 個 CustomTime 物件
  addByMinutes(n: number): void {
    this.minute = this.minute + n;

    if (this.minute >= 0 && this.minute < 60) {
      // Nothing to adjust
      this.minute;
    } else {
      this.hour = this.addHours(Math.floor(this.minute / 60)).hour;
      this.minute = modulo(this.minute, 60);
    }
  }

  // 產生 3 個 CustomTime 物件
  addSeconds(n: number) {
    const copied: CustomTime = this.copyCustomTime();
    copied.addBySeconds(n);

    return copied;
  }

  // 產生 2 個 CustomTime 物件
  addBySeconds(n: number) {
    const addedMinutes: number = Math.floor((this.second + n) / 60);

    const minutesAdded = this.addMinutes(addedMinutes);
    this.hour = minutesAdded.hour;
    this.minute = minutesAdded.minute;

    //this.hour = this.addMinutes(addedMinutes).hour;
    //this.minute = this.addMinutes(addedMinutes).minute;

    this.second = modulo(this.second + n, 60);
  }
}

const time: CustomTime = new CustomTime();
time.addHours(3).addMinutes(30).addSeconds(369).logTime(); // 物件導向寫法：可串接 (chainable)
// time.addMinutes(30).logTime();
// time.addSeconds(369).logTime();

// 冗餘寫法（傳不必要的參數進去）：
// t.logTime(t.addHours(3));
// t.logTime(t.addMinutes(30));
// t.logTime(t.addSeconds(360));
