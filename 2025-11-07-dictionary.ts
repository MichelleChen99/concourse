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

  // 若id重複，用新id的資料覆蓋掉舊id的資料
  addPerson(id: string, person: Person): Person | null {
    for (let i = 0; i < this.values.length; i++) {
      if (id === this.values[i].id) {
        this.values[i].person = person; // 找到重複的person，覆蓋
        return null;
      }
    }
    this.values[this.values.length] = new Pair(id, person); // 沒找到就新增
  }

  getOrPut(id: string, newPerson: () => Person): Person | null {
    if (this.getPerson(id) !== null) {
      return this.getPerson(id);
    } else {
      const newPerson2 = newPerson();
      this.addPerson(id, newPerson2);
    }
  }

  containsPerson(person: Person): boolean {
    return false;
  }
  containsID(id: string): boolean {
    return false;
  }
}

const dic: Dictionary = new Dictionary();
const p = dic.getOrPut("A123456789", () => new Person());
