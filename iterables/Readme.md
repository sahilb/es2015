For each data structure, iteration is a basic and common operation. 
So the goal is to define a standard interface to achieve this, which can be done using ES2015 feature : for-of-loop

Native objects like arrays, sets, maps, etc implement this interface already.
For custom data structures like LinkedList, Trees, etc we need to explicitly implement the interface.

This is done using Symbol.iterator. LinkedList.js demonstrates that.

//  [Symbol.iterator] -> function(){   let iterator = {next : ()=>{} };    return iterator}

for (let i of obj) {
   console.log(x)
}
var [...values] = obj;

Use case:
Sum of elements of an Array vs LinkedList vs Tree vs Custom Data Structure

References:
https://medium.com/javascript-scene/7-surprising-things-i-learned-writing-a-fibonacci-generator-4886a5c87710#.szspbmtml


