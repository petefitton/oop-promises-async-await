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
function User(name) {
  this.name = name;
}

let adam = new User('Adam');
let pete = new User('Pete');

console.log(adam);
console.log(pete.name);

function NBAPlayer(name, team, threePointShooter) {
  this.name = name;
  this.team = team;
  this.threePointShooter = threePointShooter;
}

let steph = new NBAPlayer("Steph Curry", "Warriors", true);
let lebron = new NBAPlayer("Lebron James", "Lakers", true);

console.log(steph);
console.log(lebron);


// make a constructor function
// make 3 new variables with that constructor function

function GeometricalFigure(shape, threeDimensional=true, physical=true) {
  this.shape = shape;
  this.threeDimensional = threeDimensional;
  this.physical = physical;
}

let cube = new GeometricalFigure("cube");

console.log(cube);



