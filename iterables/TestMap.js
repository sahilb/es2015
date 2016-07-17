var log = console.log.bind(console);
class TestMap {
    constructor() {
        this.data = {};
        this[Symbol.iterator] = () => this.it2();//eratorFunction();
    }
    set(k, v) {
        this.data[k] = v;
    }
    get(k) {
        return this.data[k];
    }
    has(k) {
        return typeof this.data[k] === 'defined';
    }
    iteratorFunction() {

        var keys = Object.keys(this.data),
            data = this.data;
        return {
            next() {
                if (keys.length) {
                    return {
                        done: false,
                        value: data[keys.shift()]
                    }
                } else {
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }
    *it2 (){
    	var keys = Object.keys(this.data);
    	for(var i=0; i< keys.length; i++){
    		yield this.data[keys[i]];
    	}
    }
}

var scores = new TestMap();
scores.set('chelsea', 1);
scores.set('arsenal', 2);
scores.set('liverpool', 4);

log(scores);

for (i of scores) {
    console.log(i)
}