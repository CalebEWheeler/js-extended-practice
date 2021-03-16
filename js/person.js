class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {return this.name;}
  getAge() {return this.age;}

  setName(name) {return this.name;}
  setAge(age) {return this.age;}
}

let person1 = new Person("Caleb", 26);

console.log(person1.name);
console.log(person1.age);
