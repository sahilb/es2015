// memoize fib
// calculate large n async

function * fibonacci() {
    var i = 1,
        j = 1,
        x;

    yield i;
    yield j;

    while (true) {
        x = j;
        j = i + j;
        i = x;
        yield j;
    }
}

function getNthFibonacci(iterator, n) {
    var i = 0,
        v;
    while (i++ < n) {
        v = iterator.next().value;
    }
    return v;
}

var iterator = fibonacci();
var v = getNthFibonacci(iterator, 5);
log(v);


//async fib

var x = getFibAsync(5, (err, v) => log('nth fib: ' + v));

function getFibAsync(n, cb) {

    var value,
        iterator = fibonacci(),
        getNextNumber = (x) => {
            if (x < n) {
                value = iterator.next().value;
                setTimeout( () => getNextNumber(++x) , 100);
            } else {
                cb(null, value);
            }
        };
    getNextNumber(0);
}