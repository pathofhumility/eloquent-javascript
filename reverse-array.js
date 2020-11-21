/* 
 * Write two functions, reverseArray and reverseArrayInPlace.
 * reverseArray takes an array as an argument and returns a new array
 * with the same elements in the inverse order.
 * 
 * reverseArrayInPlace does what reverseArray does, but it modifes the
 * given array, thus mutating the given array.
*/

function reverseArray(arr) {
  let reversedArray = [];
  arr.forEach((element) => {
    reversedArray.unshift(element);
  });
  return reversedArray;
}

// reverses array without built-in method(s)
function reverseArrayNoBuiltin(arr) {
  let reversedArray = [];
  let arrLength = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    reversedArray[arrLength - i] = arr[i];
  }
  return reversedArray;
}

function reverseArrayInPlace(arr) {
  let reversedArray = reverseArray(arr);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = reversedArray[i];
  }
}

console.log(reverseArray(['A', 'B', 'C']));
console.log(reverseArrayNoBuiltin(['A', 'B', 'C']));

let arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
console.log(arr);