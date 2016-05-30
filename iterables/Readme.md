For each data structure, iteration is a basic and common operation, so the goal is to have a common interface to do that.

The for-of loop is a language construct is the common interface. 
But it requires the object to implement the interface . For native ones like arrays, sets, maps, etc it is implemented.

// we need a property : [Symbol.iterator] -> function(){   let iterator = {next : () };    return iterator}

for (let i of obj) {
   console.log(x)
}

Use case:
Sum of elements of an Array vs LinkedList vs Tree vs Custom Data Structure


