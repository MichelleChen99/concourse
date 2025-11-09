// dictionary 應用例：Group List, Map
class Pair {
  id: string;
  person: Person;

  constructor(id: string, person: Person) {
    this.id = id;
    this.person = person;
  }
}

class Person {
  firstName: string | undefined;
  lastName: string | undefined;
  address: string | undefined;
  telephone: string | undefined;
  mobile: string | undefined;
  id: string | undefined; //身分證字號
}

class Dictionary {
  values: Array<Pair> = new Array<Pair>();

  getPerson(id: string): Person | null {
    for (let i = 0; i < this.values.length; i++) {
      if (id === this.values[i].id) {
        return this.values[i].person;
      }
    }
    return null;
  }

  // 無條件新增或覆蓋
  // 若id重複，用新id的資料覆蓋掉舊id的資料
  addPerson(id: string, person: Person): Person | null {
    for (let i = 0; i < this.values.length; i++) {
      if (id === this.values[i].id) {
        this.values[i].person = person; // 找到重複的person，覆蓋
        return null;
      }
    }
    this.values[this.values.length] = new Pair(id, person); // 沒找到就新增
    return this.values[this.values.length - 1].person;
  }

  // 找不到才新增
  getOrPut(id: string, newPerson: () => Person): Person | null {
    const exist = this.getPerson(id);

    if (exist !== null) {
      return exist;
    } else {
      const newPerson2 = newPerson();
      this.addPerson(id, newPerson2);
      return newPerson2;
    }
  }

  containsPerson(person: Person): boolean {
    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i].person.id === person.id) {
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

const dic: Dictionary = new Dictionary();
const p = dic.getOrPut("A123456789", () => new Person());

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

const alice = new Person();
alice.firstName = "Alice";
alice.lastName = "Chen";
alice.address = "台北市中正區仁愛路 100 號";
alice.telephone = "02-22223333";
alice.mobile = "0911-111-111";
alice.id = "A123456789";

const bob = new Person();
bob.firstName = "Bob";
bob.lastName = "Lin";
bob.address = "新北市板橋區文化路 88 號";
bob.telephone = "02-33334444";
bob.mobile = "0922-222-222";
bob.id = "B987654321";

// 新增成員至 dic2（Dictionary）
dic2.addPerson(alice.id, alice);
dic2.addPerson(bob.id, bob);

// console.log(dic2);
// Dictionary {
//   values: [
//     Pair { id: 'A123456789', person: [Person] },
//     Pair { id: 'B987654321', person: [Person] }
//   ]
// }

console.log(
  dic2.containsPerson({
    firstName: "Alice",
    lastName: "Chen",
    address: "台北市中正區仁愛路 100 號",
    telephone: "02-22223333",
    mobile: "0911-111-111",
    id: "A123456789",
  })
); // true

console.log(dic2.containsID("B987654321")); // true
console.log(dic2.containsID("B987654320")); // false
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
