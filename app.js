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
  this.intro = function() {
    console.log("Hi, my name is", this.name);
  }
}

let steph = new NBAPlayer("Steph Curry", "Warriors", true);
let lebron = new NBAPlayer("Lebron James", "Lakers", true);

console.log(steph);
console.log(lebron);

steph.intro();
lebron.intro();

// make a constructor function
// make 3 new variables with that constructor function

function GeometricalFigure(shape, threeDimensional=true, physical=true) {
  this.shape = shape;
  this.threeDimensional = threeDimensional;
  this.physical = physical;
}

let cube = new GeometricalFigure("cube");

console.log(cube);



// Class
class Car {
  constructor(year, make, model, color) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.color = color;
    // this keyword is NOT required for this.make/this.model here in this method that's built in the constructor function
    this.introTest = function() {
      console.log("This car is a", make, model)
    }
  }

  drive(){
    console.log("Vroom");
  }
  // this keyword IS required for this.make/this.model here in this method that's built outside of the constructor function
  intro(){
    console.log("This car is a", this.make, this.model)
  }
}

let tesla = new Car(2020, "Tesla", "Model Y", "gray");
console.log(tesla);
tesla.drive();
tesla.intro();
tesla.introTest();


class GitHubProfile {
  constructor(username, name, url) {
    this.username = username;
    this.name = name;
    this.url = url;
  }

  intro() {
    console.log(`My name is ${this.name} and my username is @${this.username}`)
  }
}

fetch('https://api.github.com/users/petefitton')
.then(response => {
  return response.json()
}).then(data => {
  // console.log(data);
  let githubURL = data.url;
  let githubName = data.name;
  let githubUsername = data.login;

  let pete = new GitHubProfile(githubUsername, githubName, githubURL);
  console.log(pete);
  console.log(pete.intro());
})




//Promises

let isMomHappy = true;

let willIGetNewPhone = new Promise(
  function(resolve, reject) {
    if (isMomHappy) {
      isMomHappy = false
      let phone = {
        brand: 'Samsung',
        color: 'black'
      }
      resolve(phone);
      isMomHappy = false
    } else {
      var reason = new Error('mom is not happy');
      reject(reason);
    }
  }
);


willIGetNewPhone.then(result => {
  console.log(result);
})


