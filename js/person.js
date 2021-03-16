class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {return this.name;}
  getAge() {return this.age;}

  setName(name) {return this.name;}
  setAge(age) {return this.age;}

  static greeting(person) {
    console.log(`Hi my name is ${person.name}, and I am ${person.age} years old.`)
  }
}