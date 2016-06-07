class LinkedList {
    constructor(val) {
        this.root = createNode(val);
        this.last = this.root;
        this[Symbol.iterator] = (() => this.iteratorFunction());
    }
    append(value) {
        this.last = this.last.NEXT = createNode(value);
    }
    iteratorFunction(){
    	var current = this.root;
    	return {
    		next(){
    			var value, done;
    			if(current.NEXT){
    				value = current.value;
    				done = false;
    				current = current.NEXT;
    			}else{
    				done = true;
    			}
    			return {value, done};
    		}
    	}
    }
}

function createNode(value) {
    return {
        value: value,
        NEXT: null
    }
}
var list = new LinkedList(100);
[1,3,5,8].forEach( a => list.append(a));

console.log(list);
for(let x of list){ console.log(x) }

// returns iterator	
function* getNumbers(){
	yield 5;
	yield 10;
	return 100;
}