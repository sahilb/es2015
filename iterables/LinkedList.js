class LinkedList {
    constructor(val) {
        this.root = createNode(val);
        this.last = this.root;
        this[Symbol.iterator] = (() => this.iteratorFunction2());
    }
    append(value) {
        this.last = this.last.NEXT = createNode(value);
    }
    iteratorFunction() {
        var current = this.root;
        return {
            next() {
                var value, done;
                if (current.NEXT) {
                    value = current.value;
                    done = false;
                    current = current.NEXT;
                } else {
                    done = true;
                }
                return {
                    value, done
                };
            }
        }
    }
    // recursive but not suitable for large lists without tail call optimization
    *iteratorFunction2() {
        yield * (this.traverse(this.root));
    }
    *traverse(node) {
        if (node) {
            yield node.value;
            yield * this.traverse(node.NEXT);
        }
    }
}

function createNode(value) {
    return {
        value: value,
        NEXT: null
    };
}

var list = new LinkedList(2);
[3, 5, 7, 11, 13].forEach(a => list.append(a));

console.log(list);
for (let x of list) {
    console.log(x)
}

//destructuring generators
var [...numbers]  = list;
console.log(numbers);


