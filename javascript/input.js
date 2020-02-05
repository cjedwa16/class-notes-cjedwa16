// Syntax for console and file input

const readline = require('readline')  // import statement

// Console configuration
const user = realine.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Console input
user.question('Enter a filename: ', function(filename)  {
  console.log(filename);
});
