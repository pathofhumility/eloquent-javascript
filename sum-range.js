/* Write a range function that takes two arguments, start and end,
 * and returns an array containing all the numbers from start up
 * to (and including) end.
 *
 * Next, write a sum function that takes an array of numbers and
 * returns the sum of these numbers.
 *
 * BONUS:
 * Modify your range function to take an optional argument that
 * indicates the "step" value used when building the array. If no
 * step is given, the elements go up by incremetns of one. Make sure
 * it also works with negative step values so that range(5, 2, -1)
 * produces [5, 4, 3, 2].
*/

function range(start, end, step) {
  let arr = [];
  if (step < 0) {
    start = -start;
    end   = -end;
  }
  for (let i = start; i <= end; i += 1) {
    arr.push(Math.abs(i));
  }
  return arr;
}

function sum(arr) {
  const reducer = (accumulator, currentVal) => accumulator + currentVal;
  let sum = arr.reduce(reducer);
  return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));