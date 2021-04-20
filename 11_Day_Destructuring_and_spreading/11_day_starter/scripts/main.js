//console.log(countries)
//alert('Open the console and check if the countries has been loaded')
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

let [e, pi, gravity, humanBodyTemp, waterBoiling] = constants;
let [fin, est, sw, den, nor] = countries;
let {width, height, area, perimeter = 100} = rectangle;
/*function logPerson({name: person, age}) {
    if (age > 20) {
        console.log(person, age)
    }
}
console.log(users.forEach(logPerson))

function checkSkills({name, skills}){
  if (skills.length > 2){
    console.log(name, skills.length)
  }
}
console.log(users.forEach(checkSkills))
*/

function checkNoDestruct(singleUser){
  if(singleUser.skills.length < 2){
    console.log(singleUser.name)
  }
}

users.forEach(checkNoDestruct)