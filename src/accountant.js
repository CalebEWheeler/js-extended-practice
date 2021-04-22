class Accountant extends Employee {
  constructor(name, age, department) {
    super(name, age, department);
  }
  
  //getters
  getName() {return this.name;}
  getAge() {return this.age;}
  getDepartment() {return this.department;}
  
  //setters
  setName(name) {return this.name;}
  setAge(age) {return this.age;}
  setDepartment(department) {return this.department;}

  greeting() {return `Hi my name is ${this.name}, and I am ${this.age} years old. I work in ${this.department}.`;}

  doWork() {
    return `${this.name} is crunching numbers.`;
  }
}