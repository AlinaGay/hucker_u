//closure

function test(){
    var counter = 0;
    return function () {
        console.log(counter++)
    }
}

var result = test();

console.log(result());

console.log(result());

