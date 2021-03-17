class Employee extends Person {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }
  
  //getters
  getName() {return this.name;}
  getAge() {return this.age;}
  getDepartment() {return this.department;}

  //setters
  setName(name) {return this.name;}
  setAge(age) {return this.age;}
  setDepartment(department) {return this.department;}

  greeting() {console.log(`Hi my name is ${this.name}, and I am ${this.age} years old. I work in ${this.department}.`)}

}