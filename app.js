// Object Oriented Programming

// Prototypal Inheritance

const dog = {
  name: "Ruff",
  goodBoy: true,
  gender: "girl"
};

const dogTwo = {
  name: "Rocco",
  color: 'brown'
};

dogTwo.__proto__ = dog;

console.log(dog);
console.log(dogTwo);
console.log(dogTwo.goodBoy);

// Make two objects and update the prototype of one object by inheriting from the other object

const A_THING = {
  shape: "round",
  physical: true,
  color: "blue"
};

const ANOTHER_THING = {
  color: "red",
  size: "huge"
};

ANOTHER_THING.__proto__ = A_THING;

console.log(A_THING);
console.log(ANOTHER_THING);

// Constructor Functions
