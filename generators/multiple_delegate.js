function * gen1() {
    yield 1;
    yield 2;
}

function * gen2() {
    yield 11;
    yield 12;
}

function *  gen() {
    yield * gen1();
    yield 10;
    yield * gen2();
}


var [...x] = gen();
console.log(x);