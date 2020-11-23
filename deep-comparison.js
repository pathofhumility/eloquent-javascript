function deepEqual(valueOne, valueTwo) {
 if (valueOne === valueTwo) {
   return true;
 } 

if (valueOne == null && valueTwo != null ||
    valueTwo == null && valueOne != null) {
      return false;
    }

 if (typeof valueOne === typeof valueTwo) {
   let keys = Object.keys(valueOne);
   // checks for != primitives
   if (keys.length == 0) {
     return false;
   }
   for (let i = 0; i < keys.length; i += 1) {
     if (!deepEqual(valueOne[keys[i]], valueTwo[keys[i]])) {
       return false;
     }
   }
 } else {
   return false;
 }
 return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(null, undefined));
// -> true