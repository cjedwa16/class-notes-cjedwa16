//const numbers = [1, 2, 3, 4, 5];
//odds = numbers.filter(x => x%2 > 0);
//console.log(odds);


const filter1 = function(array, filterer)  {
  copy = [];
  for (const element of array)  {
    if (transform(element) === true)  {
      copy.push(transform(element));
    }
  }
  return copy;
}

const numbers = [1, 2, 3, 4, 5];
const odds = filter1(numbers, x => x%2 > 0);
console.log(odds);
