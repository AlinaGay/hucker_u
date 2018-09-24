//ways of create relations between objects

var person ={
    getName: function () {
        return this.name
    }
}

var student = {
    name:'Billy',
    sleep:function () {}
}

var lector = {
    name:'John',
    talk:function () {}
}
//1)
console.log(person.getName.call(student));
//2)
student.__proto__ = person
console.log(student.getName());
//3)
var lector1 = Object.create(person);
console.log(lector1.getName());
//4)
Object.setPrototypeOf(lector,person)
console.log(lector.getName());
