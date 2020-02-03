// Objects and array syntax

// Object literal
const point = {x: 1, y: 2};
console.log(point);

// Accessing properties
console.log(point.x);

// Changing properties
point.x = 3;

// Nested object literal
const circle = {
  center: point,
  radius: 4
};

// Accessing subproperties
console.log(circle.center.x);

// Undefined subproperties
console.log(circle.color);  // this gives an undefined instead of console.error
circle.color = 'blue'
console.log(circle);
