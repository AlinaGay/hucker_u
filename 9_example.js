// assign

var animal = {
    animalType:'animal',

    describe(){}
};

let mouse = Object.assign(Object.create(animal),{
    animalType:'mouse',
    furColor: 'brown',
    legs: 4,
    tail: 'long, skinny'
});

let mouseFactory = function mouseFactory() {
    var secret = 'dbckdBCWSBDC';
    return Object.assign(Object.create(animal),{
        animalType:'mouse',
        furColor: 'brown',
        legs: 4,
        tail: 'long,skinny',
        getSecret: secret
    });
};

let mickey = mouseFactory();