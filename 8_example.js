//classes, extends

class Person{
    constructor (fName,lName){
        this.fName = fName;
        this.lName = lName;
    }
    getFullName(){
        return this.fName + ' ' + this.lName;
    }
}

class User extends Person {
    constructor (fName,lName,age){
        super(fName,lName);
        this.age = age;
    }
    getAge(){
        return this.age;
    }

}

var person = new Person('Dan', 'Mihailov',30);
var user = new User('Alina', 'Gay', 20);
console.log(person.getFullName());
console.log(user.getFullName());
console.log(user.getAge());