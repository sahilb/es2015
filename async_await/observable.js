



class Observable {
    constructor(forEach) {
        this._forEach = forEach;
    }
    forEach(onNext, onError, onCompleted) {
        if (typeof onNext === 'function') {
            return this._forEach({
                onNext, onError, onCompleted
            })
        } else {
            return this._forEach(onNext);

        }
    }
    then(fn) {
        return new Observable((observer) => {
            var outerSub,
                sub = {
                    dispose() {

                    }
                };
            this.forEach((x) => {
                var result = fn(x);
                if (result instanceof Observable) {

                } else {
                    observer.onNext(result);
                }
            })
        })
    }
}