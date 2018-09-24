//call

var name='';


function getName(name) {
    console.log(this.name);
}


var obj1 = { //this
    name: 'John',
    sername:'Volk'
}

var obj2 = { //this
    name: 'Make',
    sername:'sdjkhfj'
}

getName.call(obj1);
getName.call(obj2);