/*
 * Write a function arrayToList that builds up a list structure like the one shown
 * in the text when given [1, 2, 3] as an argument.
 * Also write a listToArray function that produces an array from a list.
 * 
 * Add a helper function prepend, which takes an element and a list and creates a new
 * list that adds the element to the front of the input list.
*/ 

function prepend(element, list) {
  return {value: element, rest: list};
}

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

// function nth(list, index) {
//   let count = 0;
//   for (let node = list; node; node = node.rest) {
//     if (count === index) {
//       return node.value;
//     }
//     count += 1;
//   }
// }

function nth(list, index) {
  if (!list) {
    return undefined;
  } else if (index === 0) {
    return list.value;
  } else {
    return nth(list.rest, index - 1);
  }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), -2));

/*
{
  value: 10,
  rest:  {
            value: 20,
            rest:  null
         }
}
*/