//const numbers = [1, 2, 3, 4, 5];
//odds = numbers.filter(x => x%2 > 0);
//console.log(odds);


const filter1 = function(array, transform)  {
  copy = [];
  for (const element of array)  {
    copy.push(transform(element));
  }
  return copy;
}

const numbers = [1, 2, 3, 4, 5];
odds = numbers.filter1(numbers, x => x%2 > 0);
console.log(odds);
