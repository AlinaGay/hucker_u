
var name='';

var obj = { //this
    name:'John',
    getName: function () {
        console.log(this.name);
    },
}

var obj2 = obj;
obj = null;
console.log(obj2);