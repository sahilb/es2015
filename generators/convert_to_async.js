if (typeof window === 'undefined') {
    var {getUserNames, getUsers, isPromise} = require('./utils.js')
}
var log = console.log.bind(console);

function * getNamesOfTopScorers() {
    var players = yield getUsers(2);
    log('players ', players);

    var names = yield getUserNames(players);
    log('names ', names);

    var topScorer = yield getUsers(1);
    log('top scorer ', topScorer);

    var name = yield getUserNames(topScorer);
    log('name ', name);

    return names;
}

function makeAsync(fn) {

    return function(arg) {
        return new Promise((resolve, reject) => {

            var iterator = fn(arg);

            function checkIfDone(next) {
                
                var {value, done} = next;
                if (done) {
                    resolve(value);
                } else {
                    value.then(function(v) {
                        checkIfDone(iterator.next(v));
                    }).catch(reject);
                }
            }

            checkIfDone(iterator.next());

        });
    }
}

var asyncNamesOfTopScorers = makeAsync(getNamesOfTopScorers);
var names = asyncNamesOfTopScorers();
names.then((result) => log('final result: ', result.join(' , ')))