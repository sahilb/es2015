For each data structure, iteration is a basic and common operation, so the goal is to have a common interface to do that.

The language construct: for-of loop, is the common interface.
Native objects like arrays, sets, maps, etc implement this interface but for custom objects like LinkedList, Trees, etc we need to explicitly implement the interface.

This is done using Symbol.iterator. LinkedList.js demonstrates that.

//  [Symbol.iterator] -> function(){   let iterator = {next : () };    return iterator}

for (let i of obj) {
   console.log(x)
}

Use case:
Sum of elements of an Array vs LinkedList vs Tree vs Custom Data Structure



