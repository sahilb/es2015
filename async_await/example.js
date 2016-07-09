// import Rx from 'rxjs/Rx';

Rx = require('rxjs');
Rx.Observable.of(1, 2, 3)
var log = () => {}; // console.log.bind(console);

function oasync(gen) {
    return function(...args) {
        return Rx.Observable.create(function(observer) {
            var subscription;
            var iterator = gen(...args);
            var evalValue = function(lastValue) {
                var {value, done} = iterator.next(lastValue);

                if (done) {
                    observer.next(value);
                    observer.complete();
                } else {
                    subscription = value.subscribe((x) => {
                        lastValue = x;
                    }, (err) => {
                        observer.error(err);
                    }, () => {
                        setTimeout(() => evalValue(lastValue));
                    });
                }
            }
            evalValue();
            return () => {
                if (subscription) {
                    subscription.unsubscribe();
                }
            };
        });
    }
}


var draw = oasync(function* () {
    var urls = yield Rx.Observable.of(1);
    var metadata = yield Rx.Observable.of(5).delay(1300);
    return metadata;
})

var obs = draw();
var sub = obs.subscribe(function(x) {
    console.log(x);
});

setTimeout(() => {
    console.log('unsubscribe');
    sub.unsubscribe();
}, 1000)