function countChar(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if(str[i] === target) count += 1;
  }
  return count;
}