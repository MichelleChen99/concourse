// Dictionary 應用例：Group List, Map

// Pair 只負責封裝值，不檢查Pair.id === Person.id
class Pair {
  id: string;
  person: Person;

  constructor(id: string, person: Person) {
    this.id = id;
    this.person = person;
  }
}

/**
 * @returns -1 when the length of ch is not 1.
 */
function codeOf(ch: string): number {
  if (ch.length == 1) {
    return ch.charCodeAt(0);
  }
  return -1;
}
// 檢查合法的起始值和結束值
function isCharBetween(ch: string, first: string, last: string): boolean {
  const code = codeOf(ch);
  if (code == -1) {
    return false;
  }

  const code1st = codeOf(first);
  if (code1st == -1) {
    return false;
  }
  return code >= code1st && code <= codeOf(last);
}

function isAlphabet(ch: string): boolean {
  return isCharBetween(ch, "a", "z") || isCharBetween(ch, "A", "Z");
}

function isDigit(ch: string): boolean {
  return isCharBetween(ch, "0", "9");
}

// 遍歷字串
function isDigits(value: string): boolean {
  for (let i = 0; i < value.length; i++) {
    if (!isDigit(value[i])) {
      return false;
    }
  }
  return true;
}

/**
 * 將縣市代碼轉為數值
 */
function countyCodeOf(ch: string): number {
  let sequence = "ABCDEFGHJKLMNPQRSTUVXYWZIO"; // 依台灣縣市碼轉換之數字排序
  return sequence.indexOf(ch[0]) + 10;
}

function toInt(value: string): number {
  return Number(value); // number可能是浮點數，因此若在其他不確定一定拿到整數的情境，需另外轉成整數
}

function isValidID(id: string): boolean {
  // 檢查碼規則
  // 參考文件： https://hackmd.io/@CynthiaChuang/CheckUID#
  if (
    id.length !== 10 || // 長度應為 10
    !isAlphabet(id.charAt(0)) || // 首個字元應為英文字母
    !isDigits(id.slice(1)) // 其他字元應為數字
  ) {
    return false;
  }

  let genderCh = id[1]; // 性別碼
  if (genderCh !== "1" && genderCh !== "2") {
    return false;
  }

  const countyCode = countyCodeOf(id[0]); // 縣市代碼轉為數值
  const validationString = countyCode.toString() + id.slice(1);

  let weight = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]; // 各欄位之權重

  let sum = 0;
  for (let i = 0; i < validationString.length; i++) {
    sum += toInt(validationString[i]) * weight[i];
  }
  return sum % 10 === 0;
}

//Requirement:
//  定義資料該有的型態，至少id不能是undefined
class Person {
  firstName: string | undefined;
  lastName: string | undefined;
  address: string | undefined;
  telephone: string | undefined;
  mobile: string | undefined;
  id: string; //身分證字號

  // 傳id作為參數：確保建構的實例都一定有id
  constructor(id: string) {
    // id = id.trim().toUpperCase();

    // if (id.length !== 10) {
    //   throw new Error("Wrong length");
    // }

    // // let countyCode = id.charCodeAt(0); // 回傳UTF-16
    // if (!isAlphabet(id.charAt(0))) {
    //   // if (countyCode < codeOf("A") || countyCode > codeOf("Z")) {
    //   throw new Error("First character is not in English");
    // }

    // let genderCode = id[1];
    // if (genderCode !== "1" && genderCode !== "2") {
    //   throw new Error("Gender number is wrong");
    // }

    // let remainCode = id.slice(2);
    // for (let i = 0; i < remainCode.length; i++) {
    //   // let n = remainCode.charCodeAt(i);
    //   // if (n < codeOf("0") || n > codeOf("9")) {
    //   if (!isDigit(remainCode.charAt(i))) {
    //     throw new Error("Invalid character in number area");
    //   }
    // }

    // // 檢查碼規則
    // // 參考文件： https://hackmd.io/@CynthiaChuang/CheckUID#
    // // let convert = "ABCDEFGHJKLMNPQRSTUVXYWZIO"; // 依台灣縣市碼轉換之數字排序

    // // const numberCode = id.slice(1);
    // // const convertedId = String(convert.indexOf(id[0]) + 10) + numberCode; // + 10：因為 A = 10、
    // // // B = 11、...O = 35...Z = 33

    // const countyCode = countyCodeOf(id[0]);
    // const validationString = countyCode.toString() + id.slice(1);

    // let weight = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]; // 各欄位之權重

    // let sum = 0;
    // for (let i = 0; i < validationString.length; i++) {
    //   sum += Number(validationString[i]) * weight[i];
    // }
    // if (sum % 10 !== 0) {
    //   throw new Error("Wrong check number");
    // }

    if (!isValidID(id)) {
      throw new Error("The given id is not valid.");
    }

    this.id = id;

    // Q: `!id` 什麼時候會是 `true` ?
    // A: 例如像是 id === undefined, id === null 時 => 這些原本就無法通過string型別的檢驗
    // Conclusion:
    //  This section is unnecessary.
    // if(!id)  equivalent to (id === undefined || id === null)
  }

  equals(other: Person): boolean {
    return (
      other.firstName === this.firstName &&
      other.lastName === this.lastName &&
      other.address === this.address &&
      other.telephone === this.telephone &&
      other.mobile === this.mobile &&
      other.id === this.id
    );
  }
}

class Dictionary {
  // How to make sure that
  //  Pair.id === Pair.person.id ??
  //  i.e. 如何確保data的一致性
  //   1. 定義一致性
  //   2. 確保一致性
  values: Array<Pair> = new Array<Pair>();

  // 資料驗證：
  isConsistent(id: string, person: Person): boolean {
    return id === person.id;
  }

  /**
   * 取得指定id的Person資料
   * 若無指定id的資料，則回傳 null
   */
  getPerson(id: string): Person | null {
    for (let i = 0; i < this.values.length; i++) {
      if (id === this.values[i].id) {
        return this.values[i].person;
      }
    }

    return null;
  }

  // 無條件新增或覆蓋
  // 若id重複，用新id的資料覆蓋掉舊id的資料 （Dictionary特性）
  //  [補充] 資料庫容許兩個重複的id，例如：新資料覆蓋掉舊資料的當下、子資料庫存有副本
  // 資料驗證：id === person.id
  addPerson(id: string, person: Person): Person | null {
    if (!this.isConsistent(id, person)) {
      throw new Error("Inconsistency between id and person.id");
    }
    return this.addPerson2(person);
  }

  //  找到重複的person，就用新資料覆蓋掉舊資料，回傳舊資料
  //  沒找到，就新增該person，回傳null
  addPerson2(person: Person): Person | null {
    for (let i = 0; i < this.values.length; i++) {
      if (person.id === this.values[i].id) {
        // 找到重複的person
        const oldData = this.values[i].person; // 先儲存舊資料
        this.values[i].person = person; // 新資料覆蓋掉舊資料
        return oldData; // 回傳舊資料（提醒什麼資料被取代掉了）
      }
    }
    this.values[this.values.length] = new Pair(person.id, person); // 沒找到就新增
    return null;
  }
  //Requirement:
  // 找不到才新增
  getOrPut(id: string, newPerson: () => Person): Person | null {
    const exist = this.getPerson(id);

    if (exist !== null) {
      return exist;
    } else {
      const newPerson2 = newPerson();
      return this.addPerson(id, newPerson2); // 已包含id一致性檢查
    }
  }

  //Requirement:
  //  比對 Person 物件，不能只比對 id
  containsPerson(person: Person): boolean {
    for (let i = 0; i < this.values.length; i++) {
      if (person.equals(this.values[i].person)) {
        // if (
        //   this.values[i].person.firstName === person.firstName &&
        //   this.values[i].person.lastName === person.lastName &&
        //   this.values[i].person.address === person.address &&
        //   this.values[i].person.telephone === person.telephone &&
        //   this.values[i].person.mobile === person.mobile &&
        //   this.values[i].person.id === person.id
        // ) {
        return true;
      }
    }
    return false;
  }

  /**
   * 判斷是否有指定id的資料
   */
  containsID(id: string): boolean {
    // for (let i = 0; i < this.values.length; i++) {
    //   if (this.values[i].id === id) {
    //     return true;
    //   }
    // }

    /**
     * 取得指定id的Person資料
     * 若無指定id的資料，則回傳 null
     */
    // getPerson(id: string)

    return this.getPerson(id) !== null;
  }
}

// const dic: Dictionary = new Dictionary();
// const p = dic.getOrPut("A123456789", () => new Person("A123456789"));
// console.log(p);

// console.log(dic);
// Dictionary { values: [ Pair { id: 'A123456789', person: [Person] } ] }

// console.log(dic.values[0].person);
// Person {
//   firstName: undefined,
//   lastName: undefined,
//   address: undefined,
//   telephone: undefined,
//   mobile: undefined,
//   id: undefined
// }

// class Person 冗餘寫法：
// class Person {
//   firstName: string | undefined;
//   lastName: string | undefined;
//   address: string | undefined;
//   telephone: string | undefined;
//   mobile: string | undefined;
//   id: string; //身分證字號

//   constructor(id: string) {
// id = id.trim().toUpperCase();

// if (id.length !== 10) {
//   throw new Error("Wrong length");
// }

// // let countyCode = id.charCodeAt(0); // 回傳UTF-16
// if (!isAlphabet(id.charAt(0))) {
//   // if (countyCode < codeOf("A") || countyCode > codeOf("Z")) {
//   throw new Error("First character is not in English");
// }

// let genderCode = id[1];
// if (genderCode !== "1" && genderCode !== "2") {
//   throw new Error("Gender number is wrong");
// }

// let remainCode = id.slice(2);
// for (let i = 0; i < remainCode.length; i++) {
//   // let n = remainCode.charCodeAt(i);
//   // if (n < codeOf("0") || n > codeOf("9")) {
//   if (!isDigit(remainCode.charAt(i))) {
//     throw new Error("Invalid character in number area");
//   }
// }

// // 檢查碼規則
// // 參考文件： https://hackmd.io/@CynthiaChuang/CheckUID#
// // let convert = "ABCDEFGHJKLMNPQRSTUVXYWZIO"; // 依台灣縣市碼轉換之數字排序

// // const numberCode = id.slice(1);
// // const convertedId = String(convert.indexOf(id[0]) + 10) + numberCode; // + 10：因為 A = 10、
// // // B = 11、...O = 35...Z = 33

// const countyCode = countyCodeOf(id[0]);
// const validationString = countyCode.toString() + id.slice(1);

// let weight = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]; // 各欄位之權重

// let sum = 0;
// for (let i = 0; i < validationString.length; i++) {
//   sum += Number(validationString[i]) * weight[i];
// }
// if (sum % 10 !== 0) {
//   throw new Error("Wrong check number");
// }

// this.id = id;

// Q: `!id` 什麼時候會是 `true` ?
// A: 例如像是 id === undefined, id === null 時 => 這些原本就無法通過string型別的檢驗
// Conclusion:
//  This section is unnecessary.
// if(!id)  equivalent to (id === undefined || id === null)
//   }
// }

// 測試資料：
const dic2 = new Dictionary();

const alice = new Person("A123456789");
alice.firstName = "Alice";
alice.lastName = "Chen";
alice.address = "台北市中正區仁愛路 100 號";
alice.telephone = "02-22223333";
alice.mobile = "0911-111-111";
// alice.id = "A123456789"; // constructor直接用參數建構id

const bob = new Person("B987654321");
bob.firstName = "Bob";
bob.lastName = "Lin";
bob.address = "新北市板橋區文化路 88 號";
bob.telephone = "02-33334444";
bob.mobile = "0922-222-222";
// bob.id = "B987654321"; // constructor直接用參數建構id

// 新增成員至 dic2（Dictionary）
dic2.addPerson(alice.id, alice);
// dic2.addPerson(bob.id, bob);
// dic2.addPerson2(alice);
// dic2.addPerson2(bob);
// console.log(dic2);
// console.log(dic2.values[0].person.id);
// Dictionary {
//   values: [
//     Pair { id: 'A123456789', person: [Person] },
//     Pair { id: 'B987654321', person: [Person] }
//   ]
// }

// console.log(dic2.values[0].id); // A123456789

// const dic: Dictionary = new Dictionary();
// const p = dic.getOrPut("A123456789", () => new Person("A123456000"));

// console.log(
//   dic2.containsPerson({
//     firstName: "Alice",
//     lastName: "Chen",
//     address: "台北市中正區仁愛路 100 號",
//     telephone: "02-22223333",
//     mobile: "0911-111-000",
//     id: "A123456789",
//   })
// ); // false

// console.log(
//   dic2.containsPerson({
//     firstName: "Alice",
//     lastName: "Chen",
//     address: "台北市中正區仁愛路 100 號",
//     telephone: "02-22223333",
//     mobile: "0911-111-111",
//     id: "A123456789",
//   })
// ); // true

// console.log(
//   dic2.containsPerson({
//     firstName: "Alan",
//     lastName: "Chen",
//     address: "台北市中正區仁愛路 100 號",
//     telephone: "02-22223333",
//     mobile: "0911-111-111",
//     id: "A123456789",
//   })
// ); // false

// console.log(dic2.containsID("B987654321")); // true
// console.log(dic2.containsID("B987654320")); // false

// 測試Pair的constructor資料驗證：
// const p1: Person = new Person("T123456789");
// const pair = new Pair("T123456789", p1);
// const badPair = new Pair("G999999999", p1);

////////////////////////////////////////////////////
// 資料結構示意圖
// dic2 (Dictionary)
// │
// └── values (Array)
//      │
//      ├── [0] → Pair {
//      │        id: "A123456789",
//      │        person: Person {
//      │            firstName: "Alice",
//      │            lastName: "Chen",
//      │            ...
//      │        }
//      │    }
//      │
//      └── [1] → Pair {
//               id: "B987654321",
//               person: Person {
//                   firstName: "Bob",
//                   lastName: "Lin",
//                   ...
//               }
//           }
