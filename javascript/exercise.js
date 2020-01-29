
// Print the sum of the squares of the integeres from 1 through 100
let i = 1;
let sum = 0;
while (i <= 10)  {
  sum += i * i;
  i += 1;
}
console.log(sum);

// Print the first Fibonacci number that is greater than 1000.
let b = 1;
let c = 1;
let x = 0;
while(x <= 1000) {
  x = b + c;
  b = c;
  c = x;
}
console.log(x);

// Print the number of integers from 1 through 100 that are divisible by 3 or 5 but not both.
for (let x = 1; x <= 100; x++)  {
  if !((x % 3) == 0) && ((x % 5) === 0))  {

  }
  if ((x % 3) === 0)) || ((x % 5) === 0) {
    console.log(x);
  }
}


// Print the smallest integer that is divisible by all the integers from 1 through 10.
