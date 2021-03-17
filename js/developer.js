class Developer extends Employee {
  constructor(name, age, department, languages) {
    super(name, age, department);
    this.languages = languages;
  }

  getLanguages() {return this.languages;}

  setLanguages(languages) {return languages;}

  whatLanguages () {
    console.log(`The languages I regularly work with are ${this.languages}.`);
  }

  greeting() {
    return `Hi my name is ${this.name}, and I am ${this.age} years old. I work in ${this.department}, and the languages I regularly use are ${this.languages}.`;
  }

  doWork () {
    return `${this.name} is coding`;
  }
}

function developSoftware (developers) {
    console.log("")
  }