let triangle = "";

for (let i = 0; i < 7; i += 1) {
  triangle += '#';
  console.log(triangle);
}

// clever solution:
for (let i = '*'; i.length <= 7; i += '*') {
  console.log(i);
}