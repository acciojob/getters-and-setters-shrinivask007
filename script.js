//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for name
  set name(newName) {
    this._name = newName;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

// Student Class (inherits from Person)
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher Class (inherits from Person)
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
