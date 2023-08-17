// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


let arr1 = [2,7,8,13,9];

let findEven = (no)=>{
    return no%2==0;
}
console.log(arr1.find(findEven), arr1.findIndex(findEven)); //2 0

let arr2 = [2,7,8,13,9];
let findEven2 = (no)=>{
    return no%2==0;
}
console.log(arr2.findLast(findEven2), arr2.findLastIndex(findEven2)); //8 2


//In JavaScript whenever we have an array of items and we run some method( .sort(), .reverse(), .splice()), it actually manipulates the original array.

// let arr3 = [7,2,8,13,9];
// let reverseArray = arr3.reverse();
// console.log(reverseArray);
// console.log(arr3);

// let secondArray = [32,12,104,16,28];
// let sortedArray = secondArray.sort()
// console.log(sortedArray); 
// console.log(secondArray); 
// //By default, the sort() function sorts values as strings.

// let thirdArray = [32,12,104,16,28];
 //let spliceMethod = thirdArray.splice(2,0,21);
// console.log(spliceMethod); 
// console.log(thirdArray); 



// not mutating the original array but return as a fresh copy of array.

let array = [7,2,8,13,9];
let reverseArray = array.toReversed();
console.log(reverseArray); //[9, 13, 8, 2, 7]
console.log(array); //[7, 2, 8, 13, 9]

let secondArray = [32,12,104,16,28];
let sortedArray = secondArray.toSorted();
console.log(sortedArray); //[104, 12, 16, 28, 32]
console.log(secondArray); //[32, 12, 104, 16, 28]
//By default, the sort() function sorts values as strings.

let thirdArray = [32,12,104,16,28];
let spliceMethod = thirdArray.toSpliced(2,0,21);
console.log(spliceMethod); //[32, 12, 21, 104, 16, 28]
console.log(thirdArray); // [32, 12, 104, 16, 28]

let withMethod = thirdArray.with(1,14);
console.log(withMethod);[32, 14, 104, 16, 28]

const wellFormedStr = "Hello, World!";
const illFormedStr = "Hello, \uD800 World!";
console.log(wellFormedStr.isWellFormed()); // true 
console.log(illFormedStr.isWellFormed()); // false