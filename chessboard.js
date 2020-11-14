// Create a "chessboard" of dimension `gridSize`. Allow
// the gridSize to be determined from user input.

const gridSize = Number(prompt("Enter an integer:"));

if (gridSize === 1) {
  console.log('#');
} else {
  let grid = "";
  let odd  = "";
  let even = "";
  
  for (let i = 1; i <= gridSize; i += 1) {
    if (i % 2 === 0) {
      odd  += ' ';
      even += '#';
    } else {
      odd  += '#';
      even += ' ';
    }
  }
  odd  += '\n';
  even += '\n';
  
  for (let i = 1; i <= gridSize; i += 1) {
    grid += i % 2 === 0 ? odd : even;
  }
  console.log(grid);
}