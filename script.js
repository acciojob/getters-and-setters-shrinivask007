//complete this code
class Person { 
	constructor(name, age){
		this.name=name;
		this.age=age;
	}
	get(){
		return this.name;
	}
	set(newage){
		this.age=newage;
	}
}
class Student extends Person {
	study(){
		consloe.log(`${this.name} is studing`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
