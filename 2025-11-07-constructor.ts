class CustomDate2 {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

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
    this.fetchData();
  }

  fetchData() {
    this.title = "...";
  }
}

const book = new Book(3);

/////////////////////////////////////////////////////
const a1 = new Array<string>();
const a2 = new Array<number>();

const b = new Array2<number>();
const v: number[] = b.values;
const v2: string[] = b.values;
