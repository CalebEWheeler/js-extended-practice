class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {return this.name;}
  getAge() {return this.age;}

  setName(name) {return this.name;}
  setAge(age) {return this.age;}

  greeting () {
    console.log(`Hi my name is ${this.name}, and I am ${this.age} years old.`)
  }
}