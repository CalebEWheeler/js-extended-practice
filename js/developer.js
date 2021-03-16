class Developer extends Person {
  constructor(name, age, languages) {
    super(name, age);
    this.languages = languages;
  }

  getLanguages() {return this.languages;}

  setLanguages(languages) {return languages;}

  static code(developer) {
    console.log(`The languages I regularly work with are ${developer.languages}.`);
  }
}