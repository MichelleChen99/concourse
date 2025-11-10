class CustomDate2 {
  year: number;
  month: number;
  day: number;

  // constructor傳入參數，就不用寫外部函式賦值
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

/////////////////////////////////////////////////////
// Class裡面可以寫函式
class Circle {
  area(): number {
    return 0;
  }
}

class Rectangle {
  area(): number {
    return 1;
  }
}

function print(value: string) {}
function print(value: number) {}

// class CustomDateTime2 {
//  date: CustomDate = new CustomDate();
//  time: CustomTime = new CustomTime();
//}

class CustomDateTime2 {
  date: CustomDate;
  time: CustomTime;

  //   constructor() {
  //     this.date = new CustomDate();
  //     this.time = new CustomTime();
  //   }

  constructor(date: CustomDate, time: CustomTime) {
    this.date = date;
    this.time = time;
  }
}

function newCustomDateTime2(): CustomDateTime2 {
  const date = new CustomDate();
  const time = new CustomTime();
  return new CustomDateTime2(date, time);
}

newCustomDateTime2();

class Book {
  bookID: number;

  title: string | undefined;

  constructor(bookID: number) {
    this.bookID = bookID;

    // Query database
    this.fetchData(); // 撈出更多關聯資料
  }

  fetchData() {
    this.title = "...";
  } // 將撈回的資料存起來
}

const book = new Book(3);

/////////////////////////////////////////////////////
// 定義資料的一致性
class Date2 {
  year: number;
  month: number; // 0~11
  day: number; // 0~30
  // 此範例限制數值的好處是讓下面的函式方便運算

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getMonth(): number {
    return this.month + 1;
  }

  addByMonths(months: number) {
    this.month += months;
    this.year += this.month / 12;
    this.month %= 12;
  }
}

/////////////////////////////////////////////////////
// Generic 泛型
const a1 = new Array<string>();
const a2 = new Array<number>();

const b = new Array2<number>();
const v: number[] = b.values;
const v2: string[] = b.values;
