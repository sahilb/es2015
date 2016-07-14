const syncFib = function * () {
    var a = 0,
        b = 1,
        last;

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

var i = 0,
    n = 5;

var fib1 = syncFib();

getNext = () => {
    let {
        value, done
    } = fib1.next();
    if (i < n) {
        i++;
        setTimeout(getNext, 0);
    } else {
        console.log('Result is ', value);
    }
};

setTimeout(getNext, 1);

function * fib2(n, current = 0, next = 1) {
    if (n === 0) {
        return 0;
    }

    yield current;
    yield * fib2(n - 1, next, current + next);
}

function * fib3(n, current = 0, next = 1) {
    if (n === 0) {
        return 0;
    }

    yield current;
    return fib3(n - 1, next, current + next);
}



var [...first4] = fib_memo(4); // 0, 1, 1, 2
var [...first6] = fib_memo(7); // 0, 1, 1, 2, 3, 5, 8

console.log(first4);
console.log(first6);
//memoize fib
function * fib_memo(n) {
    var current = 0,
        next = 1,
        i = 0;

    fib_memo._cached = fib_memo._cached || [];

    var cached = fib_memo._cached;
    if (typeof cached[n] !== 'undefined') {
        return cached.slice(0, n);
    } else {
        while (i < n) {
            cached[i] = current;
            yield current;
            [current, next] = [next, current + next];
            i++
        }
    }
}


const memo = [];

const fib = (n) => {
    if (memo[n] !== undefined) return memo[n];

    let current = 0;
    let next = 1;

    for (let i = 0; i < n; i++) {
        memo[i] = current;
        [current, next] = [next, current + next];
    }

    return current;
};

function * gen(n = 79) {
    fib(n);
    yield * memo.slice(0, n + 1);
}


//end of file