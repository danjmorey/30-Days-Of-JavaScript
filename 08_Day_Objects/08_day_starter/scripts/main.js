//console.log(countries)
//alert('Open the console and check if the countries has been loaded')

const dog = {
  name: 'Zooey',
  legs: 4,
  color: 'Tri-color',
  age: 7,
  bark: function(){
    console.log('woof woof')
  }
}
dog.breed = 'Great American Mutt'

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
const names = Object.values(users);
const keys = Object.keys(users);
let highScore = 0;
let scoreIndex = 0;
for(let i = 0; i < names.length; i++){
  if(names[i].skills.length > highScore){
    highScore = names[i].skills.length;
    scoreIndex = i;
  }
  //console.log(highScore);
}
console.log(keys[scoreIndex])
let loggedInUsers = 0;
for(let i = 0; i < names.length; i++){
  if(names[i].isLoggedIn){
    loggedInUsers++;
  }
}
console.log(loggedInUsers);

let fiftyPoints = 0;
for(let i = 0; i < names.length; i++){
  if(names[i].points >= 50){
    fiftyPoints++;
  }
}
console.log(fiftyPoints + " users with 50 points or more")