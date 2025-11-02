class Name {
  first: string = "";
  last: string = "";

  //    constructor(first: string, last: string) {
  //       this.first = first;
  //       this.last = last;
  //    }

  log1(/* 隱藏的參數 this: Name */) {}
}

function log1(this: Name) {}

function logName(name: Name) {
  console.log(`${name.first} ${name.last}`);
}

const cname = new Name();
const dname = new Name();
logName(cname);

cname.log1();
dname.log1();
// log1(cname);
// log1(dname);

class CustomDate2 {
  year: number = 1970;
  month: number = 1;
  day: number = 1;

  // instance function
  addYears(/* this: CustomDate2, */ n: number): CustomDate2 {
    const date = new CustomDate2();
    date.year = this.year + n;
    date.month = this.month;
    date.day = this.day;
    return date;
  }

  addByYears(n: number): void {
    this.year += n;
  }
}

const date = new CustomDate2();
// date -> 1970/1/1

const result = date.addYears(5);
// date -> 1970/1/1

date.addByYears(5);
// date -> 1975/1/1

// function addYears(d: CustomDate, numOfYears: number): CustomDate {
//   const result = new CustomDate();
//   result.year = d.year + numOfYears;
//   result.month = d.month;
//   result.day = d.day;

//   const daysInTargetMonth = getDaysInMonth(result.year, result.month);
//   if (result.day > daysInTargetMonth) {
//     result.day = daysInTargetMonth;
//   }

//   return result;
// }
