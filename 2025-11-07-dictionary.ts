// Dictionary 應用例：Group List, Map
class Pair {
  id: string;
  person: Person;

  constructor(id: string, person: Person) {
    this.id = id;
    this.person = person;
  }
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
    //TODO: What else to confirm?
    if (id.trim() === "") {
      throw new Error("Invalid ID");
    }

    this.id = id;

    // Q: `!id` 什麼時候會是 `true` ?
    // A: 例如像是 id === undefined, id === null 時 => 這些原本就無法通過string型別的檢驗
    // Conclusion:
    //  This section is unnecessary.
    // if(!id)  equivalent to (id === undefined || id === null)
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
  validateConsistency(id: string, person: Person): boolean {
    return id === person.id;
  }

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
  // 資料驗證：Pair.id === Pair.person.id
  addPerson(id: string, person: Person): Person | null {
    if (!this.validateConsistency(id, person)) {
      throw new Error("Inconsistency between id and person.id");
    }

    return this.addPerson2(person);
  }

  addPerson2(person: Person): Person | null {
    //TODO: Implement
    for (let i = 0; i < this.values.length; i++) {
      if (person.id === this.values[i].id) {
        this.values[i].person = person; // 找到重複的person，覆蓋
        return null;
      }
    }

    this.values[this.values.length] = new Pair(person.id, person); // 沒找到就新增
    return this.values[this.values.length - 1].person;
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
      if (
        this.values[i].person.firstName === person.firstName &&
        this.values[i].person.lastName === person.lastName &&
        this.values[i].person.address === person.address &&
        this.values[i].person.telephone === person.telephone &&
        this.values[i].person.mobile === person.mobile &&
        this.values[i].person.id === person.id
      ) {
        return true;
      }
    }
    return false;
  }

  containsID(id: string): boolean {
    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i].id === id) {
        return true;
      }
    }

    return false;
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
